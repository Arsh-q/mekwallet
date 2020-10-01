import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import Button from "@material-ui/core/Button";
import "../Cancel/Cancel.css";
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    "& > *": {
      margin: "0rem auto 2rem auto",
      width: "80%",
      height: "auto",
    },
  },
}));
const listClick = (e) => {
  e.target.style.background = "#CBF1C8";
  document.getElementById("list").style.background = "#CBF1C8";
  document.getElementById("cancelbtn").classList.add("btnColor");
};

const CancelCard = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper component="div" className="paper">
        <div className={classes.root} style={{ paddingLeft: "" }}>
          <Typography
            gutterBottom
            className="reason"
            variant="h5"
            style={{
              color: "black",
              textAlign: "left",
              fontWeight: "bold",
            }}
            component="h2"
          >
            Reason for cancellation
          </Typography>
          <Paper variant="outlined">
            <List>
              <ListItem
                style={{
                  padding: "3rem",
                  background: "#FBEDED",
                  marginTop: "-9px",
                  marginBottom: "-9px",
                }}
              >
                <Grid container spacing={3}>
                  <Grid container spacing={5}>
                    <Grid item xs={2}>
                      <Typography style={{ textAlign: "center" }}>
                        <WarningIcon
                          style={{ color: "#F6AB2F", fontSize: "5rem" }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        className=""
                        variant="h6"
                        style={{
                          fontWeight: "bold",
                          textAlign: "left",
                          paddingTop: "1rem",
                        }}
                        component="h2"
                      >
                        Order ID ##1600437394
                      </Typography>
                      <Typography
                        className=""
                        variant="h6"
                        style={{
                          textAlign: "left",
                        }}
                        component="h2"
                      >
                        2020-09-17 / 19:20
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        className=""
                        variant="h5"
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          paddingTop: "2rem",
                          paddingRight: "1rem",
                        }}
                        component="h2"
                      >
                        &#8377; 5625.0
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
              <hr />
              <ListItem id="list">
                <Grid container className="reason">
                  <Grid item xs={12}>
                    <Typography
                      className="orderdetails text-left-black"
                      variant="h6"
                      component="h2"
                      onClick={(e) => {
                        listClick(e);
                      }}
                    >
                      Need time to get ready
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <hr />
              <ListItem>
                <Grid container className="reason">
                  <Grid item xs={12}>
                    <Typography
                      gutterBottom
                      className="orderdetails text-left-black"
                      variant="h6"
                      component="h2"
                    >
                      Want to change drop location
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <hr />
              <ListItem>
                <Grid container className="reason">
                  <Grid item xs={11}>
                    <Typography
                      gutterBottom
                      className="orderdetails text-left-black"
                      variant="h6"
                      component="h2"
                    >
                      Expected a shorter wait time
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      gutterBottom
                      className="orderdetails"
                      variant="h6"
                      style={{
                        textAlign: "right",
                        color: "black",
                      }}
                      component="h2"
                    >
                      >
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <hr />
              <ListItem>
                <Grid container className="reason">
                  <Grid item xs={12}>
                    <Typography
                      gutterBottom
                      className="orderdetails text-left-black"
                      variant="h6"
                      component="h2"
                    >
                      Driver related
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <hr />
              <ListItem>
                <Grid container className="reason">
                  <Grid item xs={11}>
                    <Typography
                      gutterBottom
                      className="orderdetails text-left-black"
                      variant="h6"
                      component="h2"
                    >
                      Need to apply coupon
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      gutterBottom
                      className="orderdetails"
                      variant="h6"
                      style={{
                        textAlign: "right",
                        color: "black",
                      }}
                      component="h2"
                    >
                      >
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <hr />
              <ListItem>
                <Grid container className="reason">
                  <Grid item xs={12}>
                    <Typography
                      gutterBottom
                      className="orderdetails text-left-black"
                      variant="h6"
                      component="h2"
                    >
                      My reason is not listed
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Paper>
          <Grid container>
            <Grid item xs={6}>
              <Button variant="contained" className="btn" id="cancelbtn">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" className="btn">
                Don't cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

export default CancelCard;
