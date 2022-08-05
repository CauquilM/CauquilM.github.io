import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <style>{"body{background-color:#2f043a; color: white;}"}</style>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        rowSpacing={10}
      >
        <Grid item xs={12} textAlign="center" style={{ marginTop: "10vh" }}>
          <Typography variant="h3" component="h2">
            Karma Track
          </Typography>
        </Grid>
        <Grid item xs={5} textAlign="center">
          <Button href="/negative-action" variant="contained" size="large">
            I did something negative
          </Button>
        </Grid>
        <Grid item xs={5} textAlign="center">
          <Button href="/positive-action" variant="contained" size="large">
            I did something positive
          </Button>
        </Grid>
        <Grid item xs={5} textAlign="center">
          <Button href="/negative-event" variant="contained" size="large">
            Something negative happened
          </Button>
        </Grid>
        <Grid item xs={5} textAlign="center">
          <Button href="/positive-event" variant="contained" size="large">
            Something positive happened
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home;
