import { entries } from "idb-keyval";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "./Footer";

function HistoricDetails(props) {
  const [karmaPosts, setKarmaPosts] = useState([]);

  const getKarmaPosts = async () => {
    await entries().then((entries) => {
      entries.forEach((entry) => {
        if (entry[1].category === "positive-action") {
          setKarmaPosts((current) => [...current, entry[1]]);
        }
      });
    });
    console.log("Test", karmaPosts);
  };

  useEffect(() => {
    getKarmaPosts();
  }, []);

  return (
    <div>
      <style>{`body{background-color:#2f043a;color:wheat}`}</style>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h4" component="h1" textAlign="center">
            {props.title} Action History
          </Typography>
        </Grid>
        <Grid item xs={9}>
          {karmaPosts.map((post) => {
            return (
              <Grid
                container
                key={post.id}
                alignItems="center"
                justifyContent="center"
                rowSpacing={2}
                style={{
                  margin: "40px 0 15px 0",
                  boxShadow: "5px 5px 15px 1px #000000",
                  padding: "5px 0 10px 0",
                }}
              >
                <Grid item xs={6} textAlign="center">
                  <Typography>Date: {post.date}</Typography>
                </Grid>
                <Grid item xs={5} textAlign="center">
                  <Typography>Time: {post.time}</Typography>
                </Grid>
                <Grid item xs={6} textAlign="center">
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress variant="determinate" value={0} />
                  </Box>
                </Grid>
                <Grid item xs={4} textAlign="center">
                  Severity: {post.karmaRange}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default HistoricDetails;
