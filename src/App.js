import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { entries, get, set } from "idb-keyval";
import "console-success";

function App() {
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
        karmaRange: karmaRange,

        karmaText: karmaText,

        category: karmaSelect,

        date: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,

        time: `${hours}:${minutes}`,
      });
      console.log("Success");
      if (error) {
        setError();
      }
    }
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
    <div className="App">
      <br />
      <br />
      <select onChange={updateKarmaSelect}>
        <option value="">--Please choose an option--</option>
        <option value="negative-action">I did something bad</option>
        <option value="positive-action">I did something good</option>
        <option value="negative-event">Something bad happened</option>
        <option value="positive-event">Something good happened</option>
      </select>
      <br />
      <br />
      <input
        type="range"
        min="1"
        max="100"
        onChange={updateKarmaRange}
        value={karmaRange}
      />
      <p>{karmaRange}</p>
      <input type="text" onChange={updateKarmaText} placeholder="message" />
      <button onClick={createKarmaPost}>Click</button>
      <p>{error}</p>

      {karmaPosts.map((post) => {
        return (
          <div key="index">
            <p>Text : {post[1].karmaText}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
