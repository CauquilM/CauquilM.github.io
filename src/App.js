import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { entries, get, set, values } from "idb-keyval";
import "console-success";
import { PieChart } from "react-minimal-pie-chart";

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
  const [negative_action, setNegativeAction] = useState(0);
  const [positive_action, setPositiveAction] = useState(0);
  const [negative_event, setNegativeEvent] = useState(0);
  const [positive_event, setPositiveEvent] = useState(0);

  const updateKarmaRange = (event) => {
    setKarmaRange(event.target.value);
  };

  const updateKarmaText = (event) => {
    setKarmaText(event.target.value);
  };

  const updateKarmaSelect = (event) => {
    setKarmaSelect(event.target.value);
  };

  const updatePie = () => {
    var negative_action = 0;
    var positive_action = 0;
    var negative_event = 0;
    var positive_event = 0;

    values().then((values) => {
      values.forEach((value) => {
        switch (value.category) {
          case "negative-action":
            negative_action++;
            setNegativeAction(negative_action);
            break;
          case "positive-action":
            positive_action++;
            setPositiveAction(positive_action);
            break;
          case "negative-event":
            negative_event++;
            setNegativeEvent(negative_event);
            break;
          case "positive-event":
            positive_event++;
            setPositiveEvent(positive_event);
            break;

          default:
            break;
        }
      });
    });
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
      updatePie();
    });
    console.log("called");
  };

  useEffect(() => {
    getKarmaPosts();
  }, []);

  return (
    <div className="App">
      <h1>Karma Track</h1>
      {/* <br />
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
          <div key={post[1].id}>
            <p>Text : {post[1].karmaText}</p>
          </div>
        );
      })}
      <button onClick={updatePie}>Click</button>
      <PieChart
        data={[
          {
            title: "negative-action",
            value: negative_action,
            color: "#DAF7A6",
            date: "test",
          },
          {
            title: "postive-action",
            value: positive_action,
            color: "#FFC300",
            date: "test",
          },
          {
            title: "negative-event",
            value: negative_event,
            color: "#FF5733",
            date: "test",
          },
          {
            title: "positive-event",
            value: positive_event,
            color: "#C70039",
            date: "test",
          },
        ]}
        style={{ width: "300px" }}
      /> */}
    </div>
  );
}

export default App;
