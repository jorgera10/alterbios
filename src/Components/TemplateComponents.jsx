import { Checkbox, FormControlLabel, TextField, MenuItem } from "@mui/material";

export const CustomTextField = ({
  className,
  name,
  label,
  value,
  onChange,
  type,
}) => {
  return (
    <TextField
      className={className}
      hiddenLabel
      id={name}
      label={label}
      variant="outlined"
      size="small"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export const CustomCheckbox = ({
  className,
  name,
  checked,
  onChange,
  label,
}) => {
  return (
    <FormControlLabel
      className={className}
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

export const CustomSelect = ({
  className,
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <TextField
      className={className}
      select
      label={label}
      variant="outlined"
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option.label}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};


