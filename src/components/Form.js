import React, { useEffect, useState } from "react";
import { entries, get, set, values } from "idb-keyval";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

function Form() {
  const [karmaRange, setKarmaRange] = useState(1);
  const [karmaText, setKarmaText] = useState();
  const [karmaSelect, setKarmaSelect] = useState();
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

  const updateKarmaSelect = (event) => {
    setKarmaSelect(event.target.value);
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

        category: karmaSelect,

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

  useEffect(() => {
    getKarmaPosts();
  }, []);
  return (
    <>
      <select onChange={updateKarmaSelect}>
        <option value="">--Please choose an option--</option>
        <option value="negative-action">I did something bad</option>
        <option value="positive-action">I did something good</option>
        <option value="negative-event">Something bad happened</option>
        <option value="positive-event">Something good happened</option>
      </select>
      <Slider
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={updateKarmaRange}
        min={1}
        max={100}
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        onChange={updateKarmaText}
      />
      <button onClick={createKarmaPost}>Click</button>
      <p>{error}</p>
      {karmaPosts.map((post) => {
        return (
          <div key={post[1].id}>
            <p>Text : {post[1].karmaText}</p>
          </div>
        );
      })}
    </>
  );
}

export default Form;
