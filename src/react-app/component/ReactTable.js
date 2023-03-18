import React, { useState } from "react";
// import Forms from "./Forms";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CodeIcon from "@mui/icons-material/Code";
import BoyIcon from "@mui/icons-material/Boy";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import RememberMeIcon from "@mui/icons-material/RememberMe";
// import Action from "./Action";

const ReactTable = () => {
  // const [rows, setRows] = useState([
  //   { id: 1, developer: "Sumi Patel", field: "front-end" },
  //   { id: 2, developer: "Aparna Soni", field: "back-end" },
  //   { id: 3, developer: "Jagruti Parmar", field: "full-stack" },
  //   { id: 4, developer: "Avni Jain", field: "DevOps" },
  //   { id: 5, developer: "Chandni Vala", field: "Database" },
  // ]);
  // const [input, setInput] = useState({ id: "", developer: "", field: "" });
  // const onChange = (e) => {
  //   // debugger;
  //   setInput({ ...input, [e.target.name]: e.target.value });
  //   console.log("input", input);
  // };
  // const onButtonChange = () => {
  //   if (input.developer == "" || input.field == "") {
  //     alert("fill the form");
  //   } else {
  //     setRows([...rows, input]);
  //     setInput({ id: "", developer: "", field: "" });
  //     console.log(rows);
  //   }
  // };
  // const onDelete = () => {
  //   console.log("Hello deleted");
  //   // debugger;
  //   console.log(input.id);
  //   setRows(rows.filter((x) => x.id !== input.id));
  // };
  // console.log(rows);

  // const onEdit = () => {
  //   setRows(
  //     rows.map((x) => {
  //       if (x.id == input.id) {
  //         return (x = input);
  //       }
  //       return x;
  //     })
  //   );
  // };
  return (
    <>
      {/* <Forms onChange={onChange} onButtonChange={onButtonChange} /> */}
      <div id="table" className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <BoyIcon color="primary" />
                </TableCell>
                <TableCell align="left">
                  <RememberMeIcon color="primary" />
                </TableCell>
                <TableCell align="left">
                  <CodeIcon color="primary" />
                </TableCell>
                <TableCell align="left">
                  <CallToActionIcon color="primary" />
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/* {rows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{row.developer}</TableCell>
                  <TableCell align="left">{row.field}</TableCell>
                  <TableCell align="left">
                    {/* <Action
                      selectedRow={row}
                      onHandleClick={() => setInput(row)}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onChange={onChange}
                    /> */}
              {/* </TableCell> */}
              {/* </TableRow> */}
              {/* ))}  */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ReactTable;
