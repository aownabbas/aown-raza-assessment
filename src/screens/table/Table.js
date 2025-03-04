import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  Card,
  CardContent,
  Typography,
  Container,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./table.css"; // Import the CSS file for styling

const TableScreen = () => {
  const [users, setUsers] = useState([]);
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5); // 5 users per page
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Sorting Function
  const handleSort = () => {
    const sortedUsers = [...users].sort((a, b) => {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

    setUsers(sortedUsers);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  // Handle Page Change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container className="table-container">
      <Card className="table-card">
        <CardContent>
          <Typography variant="h4" className="table-heading">
            User Data Table
          </Typography>
          <TableContainer component={Paper} className="table-box">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel active direction={order} onClick={handleSort}>
                      Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Company</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.company.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[]} // Hides rows per page selector
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
          />
        </CardContent>
      </Card>

      {/* Button Positioned Below the Table & Card */}
      {/* <Button
        variant="contained"
        color="primary"
        className="table-btn mt-1"
        onClick={() => navigate("/table")}
      >
        Go to Table Screen
      </Button> */}

      <button className="table-btn" onClick={() => navigate("/searchbar")}>
        Go to Text Field
      </button>
    </Container>
  );
};

export default TableScreen;
