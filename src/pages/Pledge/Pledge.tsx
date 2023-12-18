import React, { useState } from "react";
import Footer from "../../components/Footer/Footer.tsx";
import Nav from "../../components/Nav/Nav.tsx";
import "./Pledge.scss";
import { Fab } from "@mui/material";

export default function Pledge() {
  const [isGuardian, setIsGuardian] = useState(true);

  const GuardianForm = (
    <div className="form__fields">
      <h2 className="form__subtitle">Primary Guardian</h2>

      <label className="form__input-label">
        First Name
        <input
          className="form__input-field"
          type="text"
          placeholder="First Name"
        />
      </label>

      <label className="form__input-label">
        Last Name
        <input
          className="form__input-field"
          type="text"
          placeholder="Last Name"
        />
      </label>
      <label className="form__input-label">
        Email
        <input
          className="form__input-field"
          type="text"
          placeholder="Email Name"
        />
      </label>
      <label className="form__input-label">
        Province
        <input
          className="form__input-field"
          type="text"
          placeholder="Province Name"
        />
      </label>
      <label className="form__input-label">
        City
        <input
          className="form__input-field"
          type="text"
          placeholder="City Name"
        />
      </label>
      <label className="form__input-label">
        Postal Code
        <input
          className="form__input-field"
          type="text"
          placeholder="Postal Code"
        />
      </label>
      <div className="form__button">
        <Fab
          style={{ color: "white", width: "10rem" }}
          color="primary"
          variant="extended"
          onClick={() => setIsGuardian(false)}
        >
          NEXT
        </Fab>
      </div>
    </div>
  );
  const ChildForm = (
    <div className="form__fields">
      <h2 className="form__subtitle">Student Pledging To Wait</h2>
      <label className="form__input-label">
        Date
        <input
          className="form__input-field"
          type="text"
          readOnly
          value={new Date(Date.now()).toLocaleString().split(",")[0]}
        />
      </label>
      <label className="form__input-label">
        Student First Name
        <input
          className="form__input-field"
          type="text"
          placeholder="First Name"
        />
      </label>

      <label className="form__input-label">
        Student Last Name
        <input
          className="form__input-field"
          type="text"
          placeholder="Last Name"
        />
      </label>
      <label className="form__input-label">
        Grade in 2023-24 School Year
        <input className="form__input-field" type="text" placeholder="Grade" />
      </label>
      <label className="form__input-label">
        Your Child's Current School
        <input
          className="form__input-field"
          type="text"
          placeholder="Search school here..."
        />
      </label>
      <label className="form__input-label">
        Your Child's Next School
        <input
          className="form__input-field"
          type="text"
          placeholder="Search for your Child's next school here"
        />
      </label>

      <div className="form__button">
        <Fab
          style={{ color: "white", width: "10rem" }}
          color="primary"
          variant="extended"
        >
          Submit
        </Fab>
      </div>
    </div>
  );
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
        {isGuardian == true ? GuardianForm : null}
        {!isGuardian && ChildForm}
      </form>
      <Footer />
    </div>
  );
}
