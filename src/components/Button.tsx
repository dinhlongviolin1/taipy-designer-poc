import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <MuiButton className="draggable" variant="outlined" onClick={onClick}>
      {text}
    </MuiButton>
  );
};

export default Button;
