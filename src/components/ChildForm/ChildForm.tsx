import React, { useState } from "react";
import { Fab } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

export default function ChildForm({ childData, setChildData, submitPledge }) {
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
          value={childData.first_name}
          onChange={(e) =>
            setChildData({ ...childData, first_name: e.target.value })
          }
        />
      </label>

      <label className="form__input-label">
        Student Last Name
        <input
          className="form__input-field"
          type="text"
          placeholder="Last Name"
          value={childData.last_name}
          onChange={(e) =>
            setChildData({ ...childData, last_name: e.target.value })
          }
        />
      </label>
      <label className="form__input-label">
        Grade in 2023-24 School Year
        <input
          className="form__input-field"
          type="text"
          placeholder="Grade"
          maxLength={2}
          value={childData.grade}
          onChange={(e) =>
            setChildData({ ...childData, grade: e.target.value })
          }
        />
      </label>

      <Autocomplete
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
            setChildData({
              ...childData,
              current_school_id: school["id"],
            });
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
            setChildData({
              ...childData,
              next_school_id: school["id"],
            });
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
