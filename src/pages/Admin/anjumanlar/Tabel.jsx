import { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  Button,
} from "@mui/material";
import FormDialog from "./Modal";

export const MuiTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
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
  );
};

const anjumanlar = [
  {
    id: 1,
    nomi: "Davlat boshqaruvchilarining majlisi",
    vaqti: "2024-05-10 14:00",
    joyi: "Davlat palatasi, Toshkent",
  },
  {
    id: 2,
    nomi: "Texnikachilar ittifoqi anjumani",
    vaqti: "2024-06-15 09:30",
    joyi: "Texnikachilar markazi, Samarqand",
  },
  {
    id: 3,
    nomi: "Xalqaro innovatsiya forumi",
    vaqti: "2024-07-20 10:00",
    joyi: "Dunyo siyosiy va madaniy markazi, Xiva",
  },
  {
    id: 4,
    nomi: "IT kengashining yig'ilishi",
    vaqti: "2024-08-05 11:30",
    joyi: "Innovatsion texnologiyalar markazi, Andijon",
  },
  {
    id: 5,
    nomi: "Dunyo ta'lim muassasalarining birligi",
    vaqti: "2024-09-18 13:45",
    joyi: "Mamlakatimizning ta'lim markazi, Namangan",
  },
  {
    id: 6,
    nomi: "Oliy o'quv yurtlarining rektoral ko'ngili",
    vaqti: "2024-10-30 15:20",
    joyi: "Toshkent davlat yuridik universiteti, Toshkent",
  },
  {
    id: 7,
    nomi: "Turizm sohasi yuksalishining eng yaxshi yo'nalishlari",
    vaqti: "2024-11-14 09:00",
    joyi: "Turizm texnologiyalari markazi, Bukhoro",
  },
  {
    id: 8,
    nomi: "Mehnat va ma'naviyat kengashi",
    vaqti: "2024-12-22 10:30",
    joyi: "Mehnat va ma'naviyat markazi, Qarshi",
  },
  {
    id: 9,
    nomi: "Iqtisodiyotning rivojlanishi strategiyasi",
    vaqti: "2025-01-08 12:15",
    joyi: "Iqtisodiyotni rivojlantirish markazi, Urganch",
  },
  {
    id: 10,
    nomi: "O'zbekistonning 30-yilligi munosabati bilan tanlov",
    vaqti: "2025-02-20 14:45",
    joyi: "Davlat milliy teatri, Toshkent",
  },
];
