import { TextField } from "@mui/material";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const Input = ({ value, onChange }: InputProps) => {
  return (
    <TextField
      className="draggable"
      id="outlined-basic"
      label={typeof value}
      variant="outlined"
      value={value}
      type={typeof value !== "string" ? "number" : "text"}
      onChange={onChange}
    />
  );
};

export default Input;
