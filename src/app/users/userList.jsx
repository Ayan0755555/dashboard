"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get("/api/users")
      .then((response) => {
        console.log("Data", response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error, "this is error!!");
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteRecord = (row) => {
    console.log("row",row)
  };

  const editRecord = (row) => {
    console.log("editrow",row)
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="right" style={{ minWidth: 70 }}>
                ID
              </TableCell>
              <TableCell align="right" style={{ minWidth: 70 }}>
                Name
              </TableCell>
              <TableCell align="right" style={{ minWidth: 70 }}>
                Email
              </TableCell>
              <TableCell align="right" style={{ minWidth: 70 }}>
                Password
              </TableCell>
              <TableCell align="center" style={{ minWidth: 70 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.code}>
                    <TableCell key={index} align="right">
                      {row.id}
                    </TableCell>
                    <TableCell key={index} align="right">
                      {row.name}
                    </TableCell>
                    <TableCell key={index} align="right">
                      {row.Email}
                    </TableCell>
                    <TableCell key={index} align="right">
                      {row.Password}
                    </TableCell>
                    <TableCell key={index} align="right">
                    <div className="flex justify-center">
                    <div className="cursor-pointer text-green-600 ml-2" onClick={()=>editRecord(row)}>
                    <EditIcon/>
                    </div>
                    <div className="cursor-pointer text-red-600 ml-4" onClick={()=>deleteRecord(row)}>
                    <DeleteIcon/>
                    </div>
                    </div>
                  </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
