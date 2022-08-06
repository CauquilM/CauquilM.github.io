import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import { clear } from "idb-keyval";
import { useState } from "react";
import Footer from "./Footer";

function SettingsComponent() {
  const [firstBtn, setFirstBtn] = useState("Delete");

  const changeText = () => {
    setFirstBtn("I am shocked :o");
  };

  const clearStore = () => {
    clear();
  };
  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{
          marginTop: "5vh",
          marginBottom: firstBtn === "Delete" ? "200px" : "108px",
        }}
        rowSpacing={7}
      >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h3" component="h1">
            Karma Track
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button variant="contained" color="error" onClick={changeText}>
            {firstBtn}
          </Button>
        </Grid>
        {firstBtn !== "Delete" ? (
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" color="error" onClick={clearStore}>
              Click to delete forever
            </Button>
          </Grid>
        ) : null}
      </Grid>
      <Footer />
    </div>
  );
}

export default SettingsComponent;
