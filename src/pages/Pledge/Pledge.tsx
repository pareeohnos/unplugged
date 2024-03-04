import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.tsx";
import Nav from "../../components/Nav/Nav.tsx";
import "./Pledge.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChildForm from "../../components/ChildForm/ChildForm.tsx";
import GuardianForm from "../../components/GuardianForm/GuardianForm.tsx";

export default function Pledge() {
  const navigate = useNavigate();

  const [isGuardian, setIsGuardian] = useState(true);
  const [guardianData, setGuardianData] = useState({
    id: null,
    first_name: "",
    last_name: "",
    province: "",
    city: "",
    email: "",
  });

  const [childrenData, setChildrenData] = useState([
    {
      first_name: "",
      last_name: "",
      current_school_id: "",
      guardian_id: "",
      grade: "",
      next_school_id: "",
    },
  ]);

  function addNewChild() {
    setChildrenData([
      {
        first_name: "",
        last_name: "",
        current_school_id: "",
        guardian_id: "",
        grade: "",
        next_school_id: "",
      },
      ...childrenData,
    ]);
  }

  window.scrollTo(0, 0);

  async function postGuardian() {
    try {
      const response = await axios.post(
        "https://api.unpluggedcanada.org/guardians/",
        guardianData
      );
      if (response.data) {
        setGuardianData(response.data);

        return response.data.id;
      }
    } catch (error) {
      return;
    }
  }

  async function submitPledge() {
    try {
      const GuardianID = await postGuardian();

      childrenData.map(async (ChildData) => {
        const child = await axios.post(
          `https://api.unpluggedcanada.org/guardians/${GuardianID}/children/`,
          ChildData
        );
        console.log("x: ", child.data);

        const pledge = await axios.post(
          `https://api.unpluggedcanada.org/pledges/${child.data.current_school_id}?grade=${child.data.grade}`
        );

        const signature = await axios.post(
          `https://api.unpluggedcanada.org/guardians/${GuardianID}/signatures/`,
          {
            child_id: child.data.id,
            pledge_id: pledge.data.id,
          }
        );
        console.log(signature);
      });
      await axios.post(
        `https://api.unpluggedcanada.org/email_confirmation?name=${
          guardianData.first_name + " " + guardianData.last_name
        }&email=${guardianData.email}`
      );
      navigate("/");
    } catch (error) {
      console.log(error);
      axios.delete(
        "https://api.unpluggedcanada.org/guardians/" + guardianData.id
      );
    }
  }

  return (
    <div>
      <Nav />
      <form className="form">
        <h1 className="form__title">Wait until 8th grade Pledge</h1>
        <div className="form__stepper">
          <div
            className={
              "form__step-orb" + (isGuardian ? " form__step-orb--SELECTED" : "")
            }
          ></div>
          <div
            className={
              "form__step-orb" +
              (!isGuardian ? " form__step-orb--SELECTED" : "")
            }
          ></div>
        </div>
        {isGuardian === true ? (
          <GuardianForm
            guardianData={guardianData}
            setGuardianData={setGuardianData}
            postGuardian={() => setIsGuardian(false)}
          />
        ) : (
          <ChildForm
            childrenData={childrenData}
            setChildrenData={setChildrenData}
            submitPledge={submitPledge}
            addNewChild={addNewChild}
          />
        )}
      </form>
      <Footer />
    </div>
  );
}
