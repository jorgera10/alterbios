import { TextField } from "@mui/material";

const CustomTextField = ({ className, name, label, value, onChange, type }) => {
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

export default CustomTextField;
