import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import Grid from "@material-ui/core/Grid";
import styles from "../Bookings.module.css";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import img from "./skoda-6.svg";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const BookingCard = () => {
  const classes = useStyles();

  return (
    <Card className={(classes.root, styles.card)}>
      <AppBar position="static" className={styles.header}>
        <Grid container>
          <Grid item xs={5}>
            <Typography
              variant="h5"
              className={(styles.details, styles.smalltxt)}
            >
              Fri, Oct 2
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <DriveEtaIcon className={styles.driveIcon} />
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="h5"
              style={{ textAlign: "right" }}
              className={(styles.details, styles.smalltxt)}
            >
              6:57 PM
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Button className={styles.id}>
              <Grid container>
                <Grid item xs={11}>
                  <Typography
                    variant="h5"
                    style={{ textAlign: "left" }}
                    className={(styles.details, styles.smalltxt)}
                  >
                    #1601645238
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography
                    variant="h5"
                    style={{ textAlign: "right" }}
                    className={(styles.details, styles.smalltxt)}
                  >
                    <ChevronRightIcon />
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              className={(styles.details, styles.smalltxt)}
            >
              <img src={img} style={{ width: "20px" }} /> OCTAVIA (CNG)
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" className={styles.detailsSecondary1}>
                NA
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" className={styles.detailsSecondary2}>
                Primary service
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <hr />
            <Typography
              variant="h6"
              style={{
                textAlign: "left",
                fontWeight: "bold",
                color: "#DB3F28",
                paddingLeft: "2rem",
              }}
              className={styles.confirm}
            >
              Awaiting Confirmation
            </Typography>
            <hr />
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <Button variant="contained" className={styles.btn1}>
                  <PhoneAndroidIcon />
                  Connect
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ textAlign: "center" }}>
                <Button variant="contained" className={styles.btn2}>
                  Cancel
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
