import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import Divider from "@mui/material/Divider";

function Home() {
  return (
    <div>
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
          <Button href="/positive-action" variant="contained" size="large">
            Something positive happened
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        textAlign="center"
        style={{
          marginTop: "7vh",
        }}
      >
        <Grid item xs={6} textAlign="center">
          <Button
            variant="outlined"
            style={{ color: "white" }}
            startIcon={<QueryStatsOutlinedIcon />}
          >
            Statistics
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Button
            variant="outlined"
            style={{ color: "white" }}
            startIcon={<SettingsIcon />}
          >
            Settings
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
