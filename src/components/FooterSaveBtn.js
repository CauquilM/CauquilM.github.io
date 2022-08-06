import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import HistoryIcon from "@mui/icons-material/History";

function Footer(props) {
  const save = () => {
    props.save();
  };
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
          startIcon={<HouseOutlinedIcon />}
          href="/"
        >
          Home
        </Button>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Button
          variant="outlined"
          style={{ color: "white" }}
          startIcon={<HistoryIcon />}
          href="/historic"
        >
          History
        </Button>
      </Grid>
      <Grid item xs={4} textAlign="center">
        <Button
          variant="outlined"
          style={{ color: "white" }}
          startIcon={<SaveOutlinedIcon />}
          onClick={save}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default Footer;
