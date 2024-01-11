import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function GuardianForm({
  guardianData,
  setGuardianData,
  postGuardian,
}) {
  const Provinces = [
    { code: "AB", name: "Alberta" },
    { code: "BC", name: "British Columbia" },
    { code: "MB", name: "Manitoba" },
    { code: "NB", name: "New Brunswick" },
    { code: "NL", name: "Newfoundland and Labrador" },
    { code: "NT", name: "Northwest Territories" },
    { code: "NS", name: "Nova Scotia" },
    { code: "NU", name: "Nunavut" },
    { code: "ON", name: "Ontario" },
    { code: "PE", name: "Prince Edward Island" },
    { code: "QC", name: "Quebec" },
    { code: "SK", name: "Saskatchewan" },
    { code: "YT", name: "Yukon" },
  ];
  function validateName(name) {
    if (!(name.length > 1 && /^[A-Za-z ]+$/.test(name))) {
      return false;
    }
    return true;
  }

  function validateEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  function validateAllInput(guardianData) {
    if (!validateName(guardianData.first_name)) {
      return false;
    }
    if (!validateName(guardianData.last_name)) {
      return false;
    }
    if (!validateEmail(guardianData.email)) {
      return false;
    }

    if (
      (guardianData.province.length === 2 && guardianData.city.length > 1) ===
      false
    ) {
      return false;
    }

    return true;
  }
  const [isValidInput, setIsValidInput] = useState(
    validateAllInput(guardianData)
  );

  return (
    <div className="form__fields">
      <h2 className="form__subtitle">Primary Guardian</h2>

      <label className="form__input-label">
        First Name
        <input
          className="form__input-field"
          type="text"
          placeholder="First Name (Required)"
          value={guardianData.first_name}
          onChange={(e) => {
            setGuardianData({ ...guardianData, first_name: e.target.value });
            let result = validateAllInput({
              ...guardianData,
              first_name: e.target.value,
            });
            if (result !== isValidInput) setIsValidInput(result);
          }}
        />
      </label>

      <label className="form__input-label">
        Last Name
        <input
          className="form__input-field"
          type="text"
          placeholder="Last Name (Required)"
          value={guardianData.last_name}
          onChange={(e) => {
            setGuardianData({ ...guardianData, last_name: e.target.value });
            let result = validateAllInput({
              ...guardianData,
              last_name: e.target.value,
            });
            if (result !== isValidInput) setIsValidInput(result);
          }}
        />
      </label>
      <label className="form__input-label">
        Email
        <input
          className="form__input-field"
          type="text"
          placeholder="Email Name (Required)"
          value={guardianData.email}
          onChange={(e) => {
            setGuardianData({ ...guardianData, email: e.target.value });
            let result = validateAllInput({
              ...guardianData,
              email: e.target.value,
            });
            if (result !== isValidInput) setIsValidInput(result);
          }}
        />
      </label>

      <label className="form__input-label">
        City
        <input
          className="form__input-field"
          type="text"
          placeholder="City Name (Required)"
          value={guardianData.city}
          onChange={(e) => {
            setGuardianData({ ...guardianData, city: e.target.value });
            let result = validateAllInput({
              ...guardianData,
              city: e.target.value,
            });
            if (result !== isValidInput) setIsValidInput(result);
          }}
        />
      </label>
      <Box sx={{ minWidth: 120 }}>
        <FormControl required fullWidth>
          <InputLabel id="demo-simple-select-label">Province</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={guardianData.province}
            label="Province *"
            required={true}
            onChange={(e) => {
              setGuardianData({ ...guardianData, province: e.target.value });
              let result = validateAllInput({
                ...guardianData,
                province: e.target.value,
              });
              if (result !== isValidInput) setIsValidInput(result);
            }}
          >
            {Provinces.map((province) => {
              return (
                <MenuItem key={province.code} value={province.code}>
                  {province.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <div className="form__button">
        <Fab
          sx={{ marginTop: 2 }}
          style={{ color: "white", width: "10rem" }}
          color="primary"
          variant="extended"
          onClick={postGuardian}
          disabled={!isValidInput}
        >
          NEXT
        </Fab>
      </div>
    </div>
  );
}
