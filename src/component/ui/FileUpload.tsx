import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { FC } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

interface InputFileUploadProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isUploaded: boolean;
}

const InputFileUpload: FC<InputFileUploadProps> = ({
  handleChange,
  isUploaded,
}) => {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      color={isUploaded ? "success" : "primary"}
    >
      Upload file
      <VisuallyHiddenInput type="file" onChange={handleChange} name="image" />
    </Button>
  );
};

export default InputFileUpload;
