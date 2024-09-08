import { Typography } from "@mui/material";

interface TextProps {
  text: string | number;
}

const Text = ({ text }: TextProps) => {
  return (
    <div className="draggable d-inline-flex">
      <Typography>{text}</Typography>
    </div>
  );
};

export default Text;
