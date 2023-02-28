import { React, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReduxForm from "./ReduxForm";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { onDelete, onEdit } from "../redux/action/Action";
import Update from "../component/Update";
import Dialog from "@mui/material/Dialog";

const ReduxTable = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const Data = useSelector((state) => state?.album);
  console.log("data", Data);

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleEdit = (defaultData) => {
    setEditOpen(true);
    dispatch(onEdit(defaultData));
  };
  const handleClose = () => {
    setEditOpen(false);
  };

  return (
    <>
      <Dialog open={editOpen}>
        <Update handleClose={handleClose} />
      </Dialog>
      <ReduxForm onChange={onChange} input={input} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Music</TableCell>
              <TableCell align="center">Year</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data?.map((dt) => (
              <TableRow
                key={dt?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {dt?.id}
                </TableCell>
                <TableCell align="center">{dt?.music}</TableCell>
                <TableCell align="center">{dt?.year}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => dispatch(onDelete(dt.id))}>
                    Delete
                  </Button>
                  <Button onClick={() => handleEdit(dt)}>Edit</Button>
                  {/* <Update /> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ReduxTable;
