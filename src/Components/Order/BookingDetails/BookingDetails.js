import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: "2rem auto",
      width: "80%",
      height: "auto",
    },
  },
}));
const BookingDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <List>
          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  gutterBottom
                  className="orderdetails"
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                  component="h2"
                >
                  Booking Details
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <hr />
          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="orderdetails"
                  variant="h6"
                  style={{
                    color: "#979595",
                    textAlign: "left",
                    fontWeight: 400,
                  }}
                  component="h2"
                >
                  Payment Details
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{
                    textAlign: "right",
                    color: "#F3D099",
                    fontWeight: "bold",
                    paddingRight: "1rem",
                  }}
                  component="h2"
                >
                  Edit
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="left-text"
                  variant="h6"
                  component="h2"
                >
                  Sub Total
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="right-text"
                  variant="h6"
                  component="h2"
                >
                  &#8377; 5625.0
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="left-text"
                  variant="h6"
                  component="h2"
                >
                  Tax
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="right-text"
                  variant="h6"
                  component="h2"
                >
                  &#8377; 0.0
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="left-text"
                  variant="h6"
                  component="h2"
                >
                  Additional charges*
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="right-text"
                  variant="h6"
                  component="h2"
                >
                  &#8377; 0.0
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <hr />
          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="totalamount"
                  variant="h4"
                  style={{
                    color: "black",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  component="h2"
                >
                  Total Amount
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="totalamount"
                  variant="h4"
                  style={{
                    textAlign: "right",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  component="h2"
                >
                  &#8377; 5625.0
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem style={{ marginBottom: "-15px" }}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Typography
                  className="packagedetails left-text"
                  variant="h6"
                  component="h2"
                >
                  Package Details
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <Typography
                  className="packagedetails"
                  variant="h6"
                  style={{
                    color: "black",
                    textAlign: "left",
                  }}
                  component="h2"
                >
                  Standard Service
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="packagedetails"
                  variant="h6"
                  style={{
                    textAlign: "right",
                    color: "#EA4D54",
                  }}
                  component="h2"
                >
                  Details >
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem style={{ marginBottom: "-30px" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="orderdetails"
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                  component="h2"
                >
                  Address
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{
                    textAlign: "right",
                    color: "#F3D099",
                    fontWeight: "bold",
                    paddingRight: "1rem",
                  }}
                  component="h2"
                >
                  Edit
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="orderdetails"
                  variant="h6"
                  style={{
                    color: "#747171",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  component="h2"
                >
                  adsaldnasda asldasdas
                  <br />
                  Dhipatoli, Ranchi, Jharkhand
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default BookingDetails;
