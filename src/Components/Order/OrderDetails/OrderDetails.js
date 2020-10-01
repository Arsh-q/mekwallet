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
      margin: "0rem auto",
      width: "80%",
      height: "auto",
    },
  },
}));

const OrderDetails = () => {
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
                  component="h2"
                >
                  Order Details
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
                  className="orderdetails text-left-black"
                  variant="h6"
                  component="h2"
                >
                  Service Location
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="orderdetails text-right-black"
                  variant="h6"
                  component="h2"
                >
                  Mekvahan Workshop #1
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
                  className="orderdetails text-left-black"
                  variant="h6"
                  component="h2"
                >
                  Booking date & time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="orderdetails text-right-black"
                  variant="h6"
                  component="h2"
                >
                  2020-09-17 / 19:20
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
                  className="orderdetails text-left-black"
                  variant="h6"
                  component="h2"
                >
                  Pickup date & time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="orderdetails text-right-black"
                  variant="h6"
                  component="h2"
                >
                  2020-09-17 / 19:00
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
                  className="orderdetails text-left-black"
                  variant="h6"
                  component="h2"
                >
                  Pickup date & time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className="orderdetails text-right-black"
                  variant="h6"
                  component="h2"
                >
                  2020-09-17 / 20:00
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default OrderDetails;
