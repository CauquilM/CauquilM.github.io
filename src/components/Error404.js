import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Error404() {
  const navigate = useNavigate();
  return (
    <div>
      <style>{`body{background-color:#2f043a;color:wheat}`}</style>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ marginTop: "10vh" }}
        rowSpacing={4}
      >
        <Grid item textAlign="center">
          <Box
            component="img"
            sx={{
              width: "20%",
            }}
            alt="The house from the offer."
            src={require("../images/yin-yang.png")}
            onClick={() => navigate("/")}
          />
        </Grid>
        <Grid item textAlign="center">
          <Typography variant="h6" component="h1">
            Seems like you lost your way :/
          </Typography>
        </Grid>
        <Grid item textAlign="center">
          <Typography variant="h6" component="h1">
            Click on one of the image to come back to home :p
          </Typography>
        </Grid>
        <Grid item textAlign="center">
          <Box
            component="img"
            sx={{
              width: "20%",
            }}
            alt="The house from the offer."
            src={require("../images/yin-yang.png")}
            onClick={() => navigate("/")}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Error404;
