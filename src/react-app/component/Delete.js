import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Delete = ({ onHandleClick, onDelete, id }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div sx={{ display: "flex" }}>
      {/* <Button
        onClick={() => {
          onHandleClick();
          handleOpen();
        }}
        variant="contained"
        size="small"
        
      > */}
      <DeleteIcon
        onClick={() => {
          onHandleClick();
          handleOpen();
        }}
        color="primary"
      />
      {/* </Button> */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Do You Want to Delete Data?
          </Typography>
          <Button
            size="sm"
            variant="soft"
            color="primary"
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
          &nbsp;
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Delete;
