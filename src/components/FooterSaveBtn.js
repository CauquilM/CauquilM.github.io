import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

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
          startIcon={<HouseOutlinedIcon />}
          href="/home"
        >
          hOME
        </Button>
      </Grid>
      <Grid item xs={6} textAlign="center">
        <Button
          variant="outlined"
          style={{ color: "white" }}
          startIcon={<SaveOutlinedIcon />}          
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
}

export default Footer;
