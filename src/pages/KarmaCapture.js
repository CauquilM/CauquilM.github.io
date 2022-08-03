import { Grid, Typography } from "@mui/material";
import Form from "../components/Form";

function KarmaCapture(props) {
  return (
    <div>
      <style>{`body{background-color:${props.bgColor};color:wheat}`}</style>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={7}
      >
        <Grid item style={{ marginTop: "7vh" }}>
          <Grid container alignItems="center" justifyContent="center" rowSpacing={1}>
            <Grid item xs={9}>
              <Typography variant="h4" component="h1">
                {props.title}
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h5" component="h2">
                Capture {props.title_category[0]} {props.title_category[2]}
              </Typography>
            </Grid>
            <Grid item xs={9} style={{ marginTop: "5vh" }}>
              <Typography variant="h6" component="h3">
                On a scale from 1 to 100, how {props.title_category[1]} was the
                action you took?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography variant="body1" component="h4">
              Somewhat <br /> {props.title_category[1]}
            </Typography>
            <Typography variant="body1" component="h4">
              Exceptionally <br /> {props.title_category[1]}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Form />
    </div>
  );
}

export default KarmaCapture;
