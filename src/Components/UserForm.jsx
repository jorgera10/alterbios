import React, { useState } from "react";
import "../index.css";
import { Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";
import CustomTextField from "./TemplateComponents";

function UserForm() {
  const civilStatus = [
    {
      id: 1,
      label: "Single",
    },
    {
      id: 2,
      label: "Married",
    },
    {
      id: 3,
      label: "Divorced",
    },
    {
      id: 4,
      label: "Widow",
    },
  ];

  const [UserData, setUserData] = useState({
    name: "",
    lastName: "",
    age: 0,
    isActive: false,
    birthdate: "01/01/1999",
    civilStatus: [],
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setUserData({
      ...UserData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, age, isActive, birthdate, civilStatus } = UserData;
    const user = { name, lastName, age, isActive, birthdate, civilStatus };
    console.log(user);
  };

  return (
    <form
      className="grid grid-cols-8 gap-6 mx-52 my-10"
      onSubmit={handleSubmit}
    >
      <CustomTextField
        className="col-span-4"
        label="Name"
        name="name"
        type="text"
        value={UserData.name}
        onChange={handleInputChange}
      />
      <CustomTextField
        className="col-span-4"
        label="Last Name"
        name="lastName"
        type="text"
        value={UserData.lastName}
        onChange={handleInputChange}
      />

      <CustomTextField
        className="col-span-4"
        label="Age"
        type="number"
        name="age"
        value={UserData.age}
        onChange={handleInputChange}
      />

      <CustomTextField
        className="col-span-4"
        label="Date"
        type="date"
        name="date"
        value={UserData.birthdate}
        onChange={handleInputChange}
      />

      <FormControlLabel
        control={
          <Checkbox
            type="checkbox"
            id="isActive"
            name="isActive"
            checked={UserData.isActive}
            onChange={handleInputChange}
          />
        }
        label="Graduated"
      />

      <TextField
        id="outlined-select-currency"
        select
        label="Civil Status"
        defaultValue="EUR"
      >
        {civilStatus.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <br />
      <button type="submit" variant="outlined" className="col-span-8">
        Submit
      </button>
    </form>
  );
}

export default UserForm;
