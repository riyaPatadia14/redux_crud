import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { onUpdate } from "../redux/action/Action";

const Update = (props) => {
  const { handleClose } = props;
  const [rows, setRows] = useState([]);
  const editData = useSelector((state) => state?.updateValue);
  const onField = (e) => {
    setRows({ ...rows, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("UseEffect Data ", editData[0]);
    setRows(editData[0]);
  }, [editData]);
  console.log("editData", editData);

  const handleUpdate = () => {
    dispatch(onUpdate(rows));
  };
  return (
    <div>
      {/* <Dialog open={editOpen} onClose={handleClose}> */}
      <DialogTitle>Edit Form</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="music"
          label="music"
          type="music"
          name="music"
          value={rows.music}
          onChange={onField}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="year"
          label="year"
          type="year"
          name="year"
          value={rows.year}
          onChange={onField}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleUpdate}>Submit</Button>
      </DialogActions>
    </div>
  );
};

export default Update;
