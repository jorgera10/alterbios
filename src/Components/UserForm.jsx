import React, { useState } from "react";
import "../index.css";
import {
  CustomCheckbox,
  CustomSelect,
  CustomTextField,
} from "./TemplateComponents";
import { Button } from "@mui/material";

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

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    age: 0,
    isActive: false,
    birthdate: "--/--/----",
    civilStatus: {
      id: 0,
      label: "",
    },
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "civilStatus") {
      const selectedOption = civilStatus.find(
        (option) => option.label === target.value
      );

      setUserData({
        ...userData,
        civilStatus: {
          id: selectedOption.id,
          label: selectedOption.label,
        },
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
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
        value={userData.name}
        onChange={handleInputChange}
      />
      <CustomTextField
        className="col-span-4"
        label="Last Name"
        name="lastName"
        type="text"
        value={userData.lastName}
        onChange={handleInputChange}
      />

      <CustomTextField
        className="col-span-4"
        label="Age"
        type="number"
        name="age"
        value={userData.age}
        onChange={handleInputChange}
      />

      <CustomTextField
        className="col-span-4"
        label="Birth Date"
        type="date"
        name="birthdate"
        value={userData.birthdate}
        onChange={handleInputChange}
      />

      <CustomCheckbox
        className="col-span-4"
        name="isActive"
        checked={userData.isActive}
        onChange={handleInputChange}
        label="Graduated"
      />

      <CustomSelect
        className="col-span-4"
        label="Civil Status"
        name="civilStatus"
        value={userData.civilStatus.label}
        onChange={handleInputChange}
        options={civilStatus}
      />

      <Button type="submit" variant="outlined" className="col-span-8">
        Submit
      </Button>
    </form>
  );
}

export default UserForm;
