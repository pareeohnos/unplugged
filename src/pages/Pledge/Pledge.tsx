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
  const [parentData, setParentData] = useState({
    id: null,
    first_name: "",
    last_name: "",
    province: "",
    city: "",
    email: "",
  });
  const [childData, setChildData] = useState({
    first_name: "",
    last_name: "",
    current_school_id: "",
    guardian_id: "",
    grade: "",
    next_school_id: "",
  });
  async function postGuardian() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/guardians/",
        parentData
      );
      if (response.data) {
        setParentData(response.data);
      }
    } catch (error) {
      return;
    }

    setIsGuardian(false);
  }

  async function submitPledge() {
    try {
      console.log(childData);
      const child = await axios.post(
        `http://127.0.0.1:8000/guardians/${parentData.id}/children/`,
        childData
      );

      const pledge = await axios.post(
        `http://127.0.0.1:8000/pledges/${child.data.current_school_id}?grade=${child.data.grade}`
      );

      const signature = await axios.post(
        `http://127.0.0.1:8000/guardians/${parentData.id}/signatures/`,
        {
          child_id: child.data.id,
          pledge_id: pledge.data.id,
        }
      );
      console.log(signature);

      navigate("/");
    } catch (error) {
      console.log(error);
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
            parentData={parentData}
            setParentData={setParentData}
            postGuardian={postGuardian}
          />
        ) : (
          <ChildForm
            childData={childData}
            setChildData={setChildData}
            submitPledge={submitPledge}
          />
        )}
      </form>
      <Footer />
    </div>
  );
}
