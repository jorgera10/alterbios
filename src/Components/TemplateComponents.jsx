import { Checkbox, FormControlLabel, TextField, MenuItem } from "@mui/material";

export const CustomTextField = ({
  name,
  label,
  value,
  onChange,
  type,
  min,
}) => {
  return (
    <TextField
      required
      className="col-span-8 border-2 border-red-500 md:col-span-4 custom-input"
      hiddenLabel
      id={name}
      label={label}
      variant="outlined"
      size="small"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
    />
  );
};

export const CustomCheckbox = ({ name, checked, onChange, label }) => {
  return (
    <FormControlLabel
      className="col-span-8 md:col-span-4 custom-input"
      control={
        <Checkbox
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
};

export const CustomSelect = ({ label, name, value, onChange, options }) => {
  return (
    <TextField
      className="col-span-8  md:col-span-4 custom-input"
      select
      label={label}
      variant="outlined"
      name={name}
      value={value}
      onChange={onChange}
      size="small"
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option.label}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
