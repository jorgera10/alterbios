import React, { useState } from "react";
import "../App.css";
import TextField from "@mui/material/TextField";
import { Stack, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

function UserForm() {
  const [UserData, setFormData] = useState({
    name: "",
    lastName: "",
    age: 0,
    isActive: false,
    birthdate: "",
    interests: [],
  });

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...UserData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, age, isActive, birthdate, interests } = UserData;
    const user = { name, lastName, age, isActive, birthdate, interests };
    console.log(user);
  };

  return (
    <Stack
      onSubmit={handleSubmit}
      component="form"
      sx={{
        width: "25ch",
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="outlined-basic"
        label="Name"
        variant="outlined"
        size="small"
        type="text"
        name="name"
        value={UserData.name}
        onChange={handleInputChange}
      />
      <TextField
        hiddenLabel
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        size="small"
        type="text"
        name="lastName"
        value={UserData.lastName}
        onChange={handleInputChange}
      />
      <TextField
        id="filled-number"
        label="Age"
        variant="outlined"
        size="small"
        type="number"
        name="age"
        value={UserData.age}
        onChange={handleInputChange}
        InputLabelProps={{
          shrink: true,
        }}
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
        hiddenLabel
        id="outlined-basic"
        label="Date"
        variant="outlined"
        size="small"
        type="date"
        name="birthdate"
        value={UserData.birthdate}
        onChange={handleInputChange}
      />

      <label htmlFor="interests">Interests:</label>
      <select
        multiple={true}
        id="interests"
        name="interests"
        value={UserData.interests}
        onChange={handleInputChange}
      >
        <option value="sports">Sports</option>
        <option value="movies">Movies</option>
        <option value="books">Books</option>
      </select>

      <button type="submit">Submit</button>
    </Stack>
  );
}

export default UserForm;
