import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";

function Footer() {
  return (
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
  );
}

export default Footer;
