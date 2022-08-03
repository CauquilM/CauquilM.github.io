import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

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
      <Grid item xs={6} textAlign="center">
        <Button
          variant="outlined"
          style={{ color: "white" }}
          startIcon={<HouseOutlinedIcon />}
          href="/"
        >
          hOME
        </Button>
      </Grid>
      <Grid item xs={6} textAlign="center">
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
