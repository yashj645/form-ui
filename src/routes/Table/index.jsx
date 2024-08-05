import {
  Paper,
  TableBody,
  TableCell,
  Table as ListTable,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  TextField,
  Box,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Table() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    //TODO: call get all data api
  }, []);

  function createData(
    name,
    fatherName,
    designation,
    address,
    category,
    tokenNo,
    vehicleNo,
    mobileNo
  ) {
    return {
      name,
      fatherName,
      designation,
      address,
      category,
      tokenNo,
      vehicleNo,
      mobileNo,
    };
  }

  const rows = [
    createData(
      "Uttkarsh",
      "Jai Prakash",
      "Treasurer",
      "102-B 24th avenue 213141 US New-Jersey,",
      "General",
      100,
      "BO-21-1234",
      "8123123453"
    ),
  ];

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleClick() {
    console.log("search", search);
    //TODO: call get data by id api.
  }

  return (
    <Container style={{ marginTop: "64px" }}>
      <Box style={{ display: "flex", marginBottom: "20px" }}>
        <TextField
          label="Token id"
          variant="outlined"
          required
          onChange={handleSearch}
        />
        <Button
          style={{ cursor: "pointer" }}
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <ListTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Father Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Token no.</TableCell>
              <TableCell>Vehicle no.</TableCell>
              <TableCell>Mobile no.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.fatherName}</TableCell>
                <TableCell>{row.designation}</TableCell>
                <TableCell width="20%">{row.address}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.tokenNo}</TableCell>
                <TableCell>{row.vehicleNo}</TableCell>
                <TableCell>{row.mobileNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ListTable>
      </TableContainer>
    </Container>
  );
}

export default Table;
