import React from "react";
import Button from "@mui/material/Button";
import "./Buttons.css";
const Buttons = (props) => {
  return (
    <>
      <Button
        type="button"
        variant="contained"
        size="small"
        color="primary"
        sx={{ width: "30ch" }}
        onClick={props.onButtonChange}
      >
        Submit
      </Button>
      {/* <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        This is a success message!
      </Alert> */}
    </>
  );
};

export default Buttons;
