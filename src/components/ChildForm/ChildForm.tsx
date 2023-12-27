import React, { useState } from "react";
import { Fab } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function ChildForm({
  childrenData,
  setChildrenData,
  submitPledge,
  addNewChild,
}) {
  const [currentSchoolKey, setCurrentSchoolKey] = useState("1");
  const [nextSchoolKey, setNextSchoolKey] = useState("2");
  const [matchingSchools, setMatchingSchools] = useState([]);

  async function fetchSchools(event: any) {
    const response = await axios.get("http://127.0.0.1:8000/schools/search/", {
      params: { partial_name: event.target.value },
    });
    setMatchingSchools(response.data);
  }

  return (
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
          value={childrenData[0].first_name}
          onChange={(e) => {
            let childObj = childrenData[0];
            childObj = { ...childObj, first_name: e.target.value };
            setChildrenData([childObj].concat(childrenData.slice(1)));
          }}
        />
      </label>

      <label className="form__input-label">
        Student Last Name
        <input
          className="form__input-field"
          type="text"
          placeholder="Last Name"
          value={childrenData[0].last_name}
          onChange={(e) => {
            let childObj = childrenData[0];
            childObj = { ...childObj, last_name: e.target.value };
            setChildrenData([childObj].concat(childrenData.slice(1)));
          }}
        />
      </label>
      <label className="form__input-label">
        Grade in 2023-24 School Year
        <input
          className="form__input-field"
          type="text"
          placeholder="Grade"
          maxLength={2}
          value={childrenData[0].grade}
          onChange={(e) => {
            let childObj = childrenData[0];
            childObj = { ...childObj, grade: e.target.value };
            setChildrenData([childObj].concat(childrenData.slice(1)));
          }}
        />
      </label>

      <Autocomplete
        key={currentSchoolKey}
        disablePortal
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
            childObj = { ...childObj, current_school_id: e.target["value"] };
            setChildrenData([childObj].concat(childrenData.slice(1)));
          }
        }}
        sx={{ marginBottom: 2 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Your Child's Current School"
            onChange={(e) => {
              fetchSchools(e);
            }}
          />
        )}
      />
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
            label="Your Child's Next School"
            onChange={(e) => {
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
            setCurrentSchoolKey(currentSchoolKey + "1");
            setNextSchoolKey(nextSchoolKey + "2");
          }}
        >
          Add Another Child
        </Fab>
        <Fab
          style={{ color: "white", width: "10rem" }}
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
