// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Footer from "../components/Footer";
import { PieChart } from "react-minimal-pie-chart";
import React, { useEffect, useState } from "react";
import { values } from "idb-keyval";

function Statistics() {
  const [negative_action, setNegativeAction] = useState(0);
  const [positive_action, setPositiveAction] = useState(0);
  const [negative_event, setNegativeEvent] = useState(0);
  const [positive_event, setPositiveEvent] = useState(0);

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

  useEffect(() => {
    updatePie();
  }, []);
  return (
    <div>
      <style>{"body{background-color:#2f043a; color: white;}"}</style>
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
      />
    </div>
  );
}

export default Statistics;
