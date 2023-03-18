import React from "react";
import Box from "@mui/material/Box";
import Delete from "./Delete";
import Update from "./Update";

const Action = ({ onHandleClick, selectedRow, onDelete, onChange, onEdit }) => {
  // console.log("selectedRow : ", selectedRow);
  return (
    <Box>
      <div style={{ display: "flex" }}>
        <Delete
          onDelete={onDelete}
          onHandleClick={onHandleClick}
          id={selectedRow.id}
        />
        &nbsp;
        <Update
          onChange={onChange}
          onHandleClick={onHandleClick}
          selectedRow={selectedRow}
          onEdit={onEdit}
        />
      </div>
    </Box>
  );
};

export default Action;
