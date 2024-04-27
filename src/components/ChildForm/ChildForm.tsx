import React, { useState } from "react";
import { Fab } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

import NewSchoolForm from "../NewSchoolForm/NewSchoolForm";

export default function ChildForm({
  childrenData,
  setChildrenData,
  submitPledge,
  addNewChild,
}) {
  const [currentSchoolKey, setCurrentSchoolKey] = useState("1");
  const [nextSchoolKey, setNextSchoolKey] = useState("2");
  const [matchingSchools, setMatchingSchools] = useState([]);
  const [currentSchoolTmpLabel, setCurrentSchoolTmpLabel] = useState("");
  const [nextSchoolTmpLabel, setNextSchoolTmpLabel] = useState("");

  async function fetchSchools(event: any) {
    const response = await axios.get(
      "https://api.unpluggedcanada.org/schools/search/",
      {
        params: { partial_name: event.target.value },
      }
    );
    setMatchingSchools(response.data);
  }
  function validateName(name) {
    if (!(name.length > 1 && /^[A-Za-z ]+$/.test(name))) {
      return false;
    }
    return true;
  }

  function validateChildInput(childObj) {
    if (
      !(validateName(childObj.first_name) && validateName(childObj.last_name))
    )
      return false;

    if (
      !(
        childObj.grade.length > 0 &&
        !isNaN(childObj.grade) &&
        0 < parseInt(childObj.grade) &&
        parseInt(childObj.grade) <= 12
      )
    )
      return false;

    if (childObj.current_school_id.length === 0) return false;

    return true;
  }
  const [isValidInput, setIsValidInput] = useState(
    validateChildInput(childrenData[0])
  );

  function addNewSchoolToChild(addedSchool, whichSchool) {
    let childObj = childrenData[0];
    if (whichSchool === "current"){
      childObj = { ...childObj, current_school_id: addedSchool.id };
      setCurrentSchoolTmpLabel(`${addedSchool.name}, ${addedSchool.city}, ${addedSchool.province}`);
    }
    else {
      childObj = { ...childObj, next_school_id: addedSchool.id };
      setNextSchoolTmpLabel(`${addedSchool.name}, ${addedSchool.city}, ${addedSchool.province}`);

    }
    setChildrenData([childObj].concat(childrenData.slice(1)));

  }
  return (
    <div className="form__fields">
      <h2 className="form__subtitle text-[24px]  font-bold text-[#2e4049]">
        Student Pledging To Wait
      </h2>
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
          placeholder="First Name (required)"
          value={childrenData[0].first_name}
          onChange={(e) => {
            let childObj = childrenData[0];
            childObj = { ...childObj, first_name: e.target.value };
            setChildrenData([childObj].concat(childrenData.slice(1)));
            let result = validateChildInput(childObj);
            if (result !== isValidInput) setIsValidInput(result);
          }}
        />
      </label>

      <label className="form__input-label">
        Student Last Name
        <input
          className="form__input-field"
          type="text"
          placeholder="Last Name (required)"
          value={childrenData[0].last_name}
          onChange={(e) => {
            let childObj = childrenData[0];
            childObj = { ...childObj, last_name: e.target.value };
            setChildrenData([childObj].concat(childrenData.slice(1)));
            let result = validateChildInput(childObj);
            if (result !== isValidInput) setIsValidInput(result);
          }}
        />
      </label>
      <label className="form__input-label">
        Grade in 2023-24 School Year
        <input
          className="form__input-field"
          type="text"
          placeholder="Grade (required)"
          maxLength={2}
          value={childrenData[0].grade}
          onChange={(e) => {
            let childObj = childrenData[0];
            childObj = { ...childObj, grade: e.target.value };
            setChildrenData([childObj].concat(childrenData.slice(1)));
            let result = validateChildInput(childObj);
            if (result !== isValidInput) setIsValidInput(result);
          }}
        />
      </label>

      <NewSchoolForm addNewSchoolToChild={addNewSchoolToChild} whichSchool={"current"}/>

      <Autocomplete
        key={currentSchoolKey}
        disablePortal
        loading
        id="combo-box-demo"
        options={matchingSchools}
        getOptionLabel={(option) => {
          return `${option["name"]}, ${option["city"]}, ${option["province"]}`;
        }}
        onSelect={async (e) => {
          const school = matchingSchools.filter((s) =>
            e.target["value"].startsWith(s["name"])
          )[0];

          if (school) {
            let childObj = childrenData[0];
            childObj = { ...childObj, current_school_id: school["id"] };
            setChildrenData([childObj].concat(childrenData.slice(1)));
            let result = validateChildInput(childObj);
            if (result !== isValidInput) setIsValidInput(result);
          }
        }}
        sx={{ marginBottom: 2 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={currentSchoolTmpLabel ? currentSchoolTmpLabel : "Your Child's Current School"}
            onChange={(e) => {
              setCurrentSchoolTmpLabel("");
              fetchSchools(e);
            }}
          />
        )}
      />
      
      <NewSchoolForm addNewSchoolToChild={addNewSchoolToChild} whichSchool={"next"}/>

      <Autocomplete
        key={nextSchoolKey}
        disablePortal
        id="combo-box-demo"
        options={matchingSchools}
        getOptionLabel={(option) => {
          return `${option["name"]}, ${option["city"]}, ${option["province"]}`;
        }}
        onSelect={(e) => {
          const school = matchingSchools.filter((s) =>
            e.target["value"].startsWith(s["name"])
          )[0];

          if (school) {
            let childObj = childrenData[0];
            childObj = { ...childObj, next_school_id: e.target["value"] };
            setChildrenData([childObj].concat(childrenData.slice(1)));
          }
        }}
        sx={{ marginBottom: 3 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={nextSchoolTmpLabel ? nextSchoolTmpLabel : "Your Child's Next School"}
            onChange={(e) => {
              setNextSchoolTmpLabel("");
              fetchSchools(e);

            }}
          />
        )}
      />

      <div className="form__button">
        <Fab
          variant="extended"
          onClick={() => {
            addNewChild();
            setMatchingSchools([]);
            setIsValidInput(false);
            setCurrentSchoolKey(currentSchoolKey + "1");
            setNextSchoolKey(nextSchoolKey + "2");
          }}
        >
          Add Other Child
        </Fab>
        <Fab
          disabled={!isValidInput}
          style={{ color: "white", width: "10rem", marginLeft: "1rem" }}
          color="primary"
          variant="extended"
          onClick={submitPledge}
        >
          Submit
        </Fab>
      </div>
    </div>
  );
}
