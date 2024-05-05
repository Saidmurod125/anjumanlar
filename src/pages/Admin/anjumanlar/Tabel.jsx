import React, { useState, useEffect } from "react";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";
import FormDialog from "./Modal";
import useAxios from "../../../service/useAxios";
import Loader from "../../../components/Loader";


export const MuiTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [editOrDelete, setEditOrDelete] = useState(false);
  const [selectedAnjuman, setSelectedAnjuman] = useState(null);
  const [anjumanlar, setAnjumanlar] = useState([]);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const { data, loading  } = useAxios(
    "https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference"
  );

  useEffect(() => {
    if (data) {
      setAnjumanlar(data);
    }
  }, [data]);

  const handleClickOpen = (e, data) => {
    setOpen(true);
    setEditOrDelete(e === "Add" ? false : true);
    setSelectedAnjuman(data);
  };

  const handleDeleteConfirm = (e) => {
    setSelectedAnjuman(e);
    setDeleteConfirmOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleDeleteCancel = () => {
    setDeleteConfirmOpen(false);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
// <<<<<<< HEAD
//     <div className="container justify-end mx-auto ">
//       {loading ? (
//  <Loader/>
// ) : ()}
//         <div>
//           <Box
//             display="flex"
//             justifyContent="flex-end"
//             alignItems="center"
//             margin={5}
//           >
//             <Button 
//               variant="contained"
//               onClick={() => handleClickOpen("Add", null)}
//             >
//               Add
//             </Button>
//           </Box>
//           <FormDialog
//             open={open}
//             deleteConfirmOpen={deleteConfirmOpen}
//             editOrDelete={editOrDelete}
//             editData={selectedAnjuman}
//             setAnjumanlar={setAnjumanlar}
//             setOpen={setOpen}
//             anjumanlar={anjumanlar}
//             setDeleteConfirmOpen={setDeleteConfirmOpen}
//             handleDeleteCancel={handleDeleteCancel}
//           />
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="center">Id</TableCell>
//                   <TableCell align="center">Name</TableCell>
//                   <TableCell align="center">Time</TableCell>
//                   <TableCell align="center">Place</TableCell>
//                   <TableCell align="center">Action</TableCell>
// =======

    <div>
        {loading ? (
 <Loader/>
) : (
  <div className="container mx-auto ">

    <div style={{display:"flex",justifyContent:"space-between"}}>
      <p>Yangi anjuman qo'shish</p>
      <Button variant="contained" onClick={handleClickOpen}>Add</Button>
    </div>
    <FormDialog open={open} setOpen={setOpen} />
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Place</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {anjumanlar
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.nomi}</TableCell>
                <TableCell align="center">{row.vaqti}</TableCell>
                <TableCell align="center">{row.joyi}</TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    fontSize: "16px",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <Button onClick={handleClickOpen} variant="contained">
                    Edit
                  </Button>
                  <Button color="error" variant="contained">
                    Delete
                  </Button>
                </TableCell>

              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[4]}
      component="div"
      count={anjumanlar.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />


  </div>
)}
    </div>
  );
};
