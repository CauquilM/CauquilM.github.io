import { PieChart } from "react-minimal-pie-chart";
import React, { useEffect, useState } from "react";
import { values } from "idb-keyval";
import { Grid, Typography } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import Footer from "../components/FooterSaveBtn";

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
      console.log(values);
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
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
      >
        <Grid item style={{ marginTop: "15px" }}>
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
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Grid container alignItems="stretch" justifyContent="center">
            <Grid item>
              <Typography>
                {negative_action > 1
                  ? `There's ${negative_action} negatives actions`
                  : `There's ${negative_action} negative action`}
              </Typography>
            </Grid>
            <Grid item>
              <SquareIcon style={{ color: "#DAF7A6" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Grid container alignItems="stretch" justifyContent="center">
            <Grid item>
              <Typography>
                {positive_action > 1
                  ? `There's ${positive_action} positives actions`
                  : `There's ${positive_action} positive action`}
              </Typography>
            </Grid>
            <Grid item>
              <SquareIcon style={{ color: "#FFC300" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Grid container alignItems="stretch" justifyContent="center">
            <Grid item>
              <Typography>
                {negative_event > 1
                  ? `There's ${negative_event} negatives events`
                  : `There's ${negative_event} negative event`}
              </Typography>
            </Grid>
            <Grid item>
              <SquareIcon style={{ color: "#FF5733" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Typography></Typography>
          <Grid container alignItems="stretch" justifyContent="center">
            <Grid item>
              <Typography>
                {positive_event > 1
                  ? `There's ${positive_event} positives events`
                  : `There's ${positive_event} positive event`}
              </Typography>
            </Grid>
            <Grid item>
              <SquareIcon style={{ color: "#C70039" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Statistics;
