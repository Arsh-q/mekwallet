import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import Button from "@material-ui/core/Button";
import "../Cancel/Cancel.scss";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    "& > *": {
      margin: "0rem auto 1rem auto",
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
        <div className={classes.root}>
          <Typography
            gutterBottom
            className="reason mobile"
            variant="h5"
            style={{
              color: "black",
              textAlign: "left",
              fontWeight: "bold",
              paddingTop: "1rem",
            }}
            component="h2"
          >
            <Button variant="default" style={{ marginLeft: "1rem" }}>
              <ArrowBackIcon style={{ marginBottom: "2px" }} />
            </Button>
            Reason for cancellation
          </Typography>
          <Paper
            variant="outlined"
            style={{ width: "80%" }}
            className="mobList"
          >
            <List>
              <ListItem
                className="redarea"
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
                          className="mobile-icon"
                          style={{ color: "#F6AB2F", fontSize: "5rem" }}
                        />
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography
                        className="smalltxt"
                        variant="h6"
                        style={{
                          fontWeight: "bold",
                          textAlign: "left",
                          paddingTop: "1.1rem",
                          paddingLeft: "0.5rem",
                        }}
                        component="h2"
                      >
                        Order ID #1600437394
                      </Typography>
                      <Typography
                        className="smalltxt"
                        variant="h6"
                        style={{
                          textAlign: "left",
                          paddingLeft: "0.5rem",
                        }}
                        component="h2"
                      >
                        2020-09-17 / 19:20
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        className="smalltxt amount"
                        variant="h5"
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          paddingTop: "2rem",
                          paddingRight: "2rem",
                        }}
                        component="h2"
                      >
                        &#8377;5625.0
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
                      className="orderdetails text-left-black mobile"
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
                      className="orderdetails text-left-black mobile"
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
                      className="orderdetails text-left-black mobile"
                      variant="h6"
                      component="h2"
                    >
                      Expected a shorter wait time
                      <span style={{ float: "right", marginBottom: "-30px" }}>
                        <ChevronRightIcon />
                      </span>
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
                      className="orderdetails text-left-black mobile"
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
                      className="orderdetails text-left-black mobile"
                      variant="h6"
                      component="h2"
                    >
                      Need to apply coupon
                      <span style={{ float: "right", marginBottom: "-30px" }}>
                        <ChevronRightIcon />
                      </span>
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
                      className="orderdetails text-left-black mobile"
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
          <Grid container style={{ textAlign: "center" }}>
            <Grid item xs={6}>
              <Button variant="contained" className="btn" id="cancelbtn">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" className="btn" id="cancelbtn">
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
