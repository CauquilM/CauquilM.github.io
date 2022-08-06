import React, { useEffect, useState } from "react";
import { set } from "idb-keyval";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import FooterSaveBtn from "../components/FooterSaveBtn";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

function Form(props) {
  const [karmaRange, setKarmaRange] = useState(1);
  const [karmaText, setKarmaText] = useState();
  const [error, setError] = useState();
  const [months, setMonths] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const updateKarmaRange = (event) => {
    setKarmaRange(event.target.value);
  };

  const updateKarmaText = (event) => {
    setKarmaText(event.target.value);
  };

  const createKarmaPost = () => {
    if (!karmaText) {
      setError("! You have to type a message !");
    } else {
      const date = new Date();
      const hours =
        date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`;
      const minutes =
        date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`;
      set(Date.now(), {
        id: Date.now(),
        karmaRange: karmaRange,

        karmaText: karmaText,

        category: props.karmaCategory,

        // prettier-ignore
        date: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,

        time: `${hours}:${minutes}`,

        value: 0,
      });
      setError("Post created with success");
      console.log("Success");
      if (error) {
        setError();
      }
    }
  };

  const toSave = () => {
    createKarmaPost();
  };
  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={9}>
          <Slider
            variant="middle"
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={updateKarmaRange}
            min={1}
            max={100}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            variant="filled"
            multiline
            maxRows={4}
            onChange={updateKarmaText}
            sx={{
              ".MuiInputBase-root-MuiFilledInput-root": {
                backgroundColor: "white",
              },
            }}
            inputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center" style={{ marginTop: "20px" }}>
          <Typography variant="6" component="h3">
            {error}
          </Typography>
        </Grid>
      </Grid>
      <FooterSaveBtn save={toSave} />
    </>
  );
}

export default Form;
