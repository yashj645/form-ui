import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@mui/material";
// import Styled from "./style";

function Home() {
  // const [file, setFile] = useState(null);
  const navigate = useNavigate()
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
    //TODO: call form post api

    fetch('http://localhost:9292/api/add-vehicle', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: formData
    })
    .then((res) => {
      console.log('res', res)
      navigate('/table')
    }).catch((err) => console.log('err', err))
  }

  // function handleFileUpload(event) {
  //   setFile(event.target.files[0]);
  // }

  return (
    <Container style={{ marginTop: "64px" }}>
      <form noValidate onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="name"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="fatherName"
              type="text"
              label="Father Name"
              name="fatherName"
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="designnation"
              type="text"
              label="Designation"
              name="designation"
              autoComplete="designation"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
              autoComplete="address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="category"
              label="Category"
              type="text"
              id="category"
              autoComplete="category"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="token"
              label="Token no."
              type="text"
              id="token"
              autoComplete="token"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="vehicleNo"
              label="Vehicle no."
              type="text"
              id="vehicleNo"
              autoComplete="vehicleNo"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="mobileNo"
              label="Mobile no."
              type="number"
              id="mobileNo"
              autoComplete="mobileNo"
            />
          </Grid>
          {/* <Grid
            item
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              style={{ marginRight: "5px" }}
            >
              Upload file
              <Styled.VisuallyHiddenInput
                type="file"
                name="photo"
                onChange={handleFileUpload}
              />
            </Button>
            {file && file?.name}
          </Grid> */}
        </Grid>
        <Button
          style={{ marginTop: "20px" }}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Home;
