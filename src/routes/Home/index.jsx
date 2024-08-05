import React from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";

function Home() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = {};

    // Access form elements and their values
    for (const element of event.target.elements) {
      if (element.value) {
        formData[element.name] = element.value;
      }
    }
  
    console.log(formData);
  }

  return (
    <Container style={{ marginTop: "64px" }}>
      <form noValidate onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button style={{marginTop: '20px'}} type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Home;
