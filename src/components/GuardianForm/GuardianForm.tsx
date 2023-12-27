import React from "react";
import { Fab } from "@mui/material";

export default function GuardianForm({
  parentData,
  setParentData,
  postGuardian,
}) {
  return (
    <div className="form__fields">
      <h2 className="form__subtitle">Primary Guardian</h2>

      <label className="form__input-label">
        First Name
        <input
          className="form__input-field"
          type="text"
          placeholder="First Name"
          value={parentData.first_name}
          onChange={(e) =>
            setParentData({ ...parentData, first_name: e.target.value })
          }
        />
      </label>

      <label className="form__input-label">
        Last Name
        <input
          className="form__input-field"
          type="text"
          placeholder="Last Name"
          value={parentData.last_name}
          onChange={(e) =>
            setParentData({ ...parentData, last_name: e.target.value })
          }
        />
      </label>
      <label className="form__input-label">
        Email
        <input
          className="form__input-field"
          type="text"
          placeholder="Email Name"
          value={parentData.email}
          onChange={(e) =>
            setParentData({ ...parentData, email: e.target.value })
          }
        />
      </label>
      <label className="form__input-label">
        Province
        <input
          className="form__input-field"
          type="text"
          placeholder="Province Name"
          value={parentData.province}
          maxLength={2}
          onChange={(e) =>
            setParentData({ ...parentData, province: e.target.value })
          }
        />
      </label>
      <label className="form__input-label">
        City
        <input
          className="form__input-field"
          type="text"
          placeholder="City Name"
          value={parentData.city}
          onChange={(e) =>
            setParentData({ ...parentData, city: e.target.value })
          }
        />
      </label>

      <div className="form__button">
        <Fab
          style={{ color: "white", width: "10rem" }}
          color="primary"
          variant="extended"
          onClick={postGuardian}
        >
          NEXT
        </Fab>
      </div>
    </div>
  );
}
