import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import HistoryIcon from '@mui/icons-material/History';

function Footer() {
  return (
    <Grid
      container
      style={{
        marginTop: "7vh",
      }}
    >
      <Grid item xs={4} textAlign="center">
        <Button
          variant="outlined"
          style={{ color: "white" }}
          startIcon={<QueryStatsOutlinedIcon />}
          href="/statistics"
        >
          Stats
        </Button>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Button
          variant="outlined"
          style={{ color: "white" }}
          startIcon={<HistoryIcon />}
          href="/statistics"
        >
          History
        </Button>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Button
          variant="outlined"
          style={{ color: "white" }}
          startIcon={<SettingsIcon />}
          href="/settings"
        >
          Options
        </Button>
      </Grid>
    </Grid>
  );
}

export default Footer;
