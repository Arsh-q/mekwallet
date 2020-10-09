import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import styles from "../Order/Order.module.css";

const OrderDetails = () => {
  return (
    <div className={styles.orderdetailscard}>
      <Paper variant="outlined">
        <List>
          <ListItem>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  gutterBottom
                  className={styles.orderdetails}
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
                  className={(styles.orderdetails, styles.textleftblack)}
                  variant="h6"
                  component="h2"
                >
                  Service Location
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className={(styles.orderdetails, styles.textrightblack)}
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
                  className={(styles.orderdetails, styles.textleftblack)}
                  variant="h6"
                  component="h2"
                >
                  Booking date & time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className={(styles.orderdetails, styles.textrightblack)}
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
                  className={(styles.orderdetails, styles.textleftblack)}
                  variant="h6"
                  component="h2"
                >
                  Pickup date & time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className={(styles.orderdetails, styles.textrightblack)}
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
                  className={(styles.orderdetails, styles.textleftblack)}
                  variant="h6"
                  component="h2"
                >
                  Pickup date & time
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  gutterBottom
                  className={(styles.orderdetails, styles.textrightblack)}
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
