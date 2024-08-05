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
import React, { useState } from "react";

function Table() {
  const [search, setSearch] = useState('')
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  function handleClick() {
    console.log('search', search)
  }

  return (
    <Container style={{ marginTop: "64px" }}>
      <Box style={{display: 'flex', marginBottom: '20px'}}>
        <TextField
          label="Token id"
          variant="outlined"
          required
          onChange={handleSearch}
        />
        <Button style={{cursor: 'pointer'}} onClick={handleClick} variant="contained" color="primary">Search</Button>
      </Box>
      <TableContainer component={Paper}>
        <ListTable sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ListTable>
      </TableContainer>
    </Container>
  );
}

export default Table;
