import React, { useEffect, useState } from "react";
import { entries, get, set, values } from "idb-keyval";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import FooterSaveBtn from "../components/FooterSaveBtn";
import Grid from "@mui/material/Grid";

function Form(props) {
  const [karmaRange, setKarmaRange] = useState(1);
  const [karmaText, setKarmaText] = useState();
  const [error, setError] = useState();
  const [karmaPosts, setKarmaPosts] = useState([]);
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
      console.log("Success");
      if (error) {
        setError();
      }
    }
    getKarmaPosts();
  };

  const getKarmaPosts = () => {
    entries().then((entries) => {
      setKarmaPosts(entries);
    });
    console.log("called");
  };

  const toSave = () => {
    createKarmaPost();
  };

  useEffect(() => {
    getKarmaPosts();
  }, []);
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
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
            multiline
            maxRows={4}
            onChange={updateKarmaText}
          />
        </Grid>
        <Grid item xs={12} textAlign="center"></Grid>
      </Grid>
      {/* 
      
      <p>{error}</p>
      {karmaPosts.map((post) => {
        return (
          <div key={post[1].id}>
            <p>Text : {post[1].karmaText}</p>
          </div>
        );
      })}*/}
      <FooterSaveBtn save={toSave} />
    </>
  );
}

export default Form;
