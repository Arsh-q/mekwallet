import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppNav from "../AppNav/AppNav";

import styles from "./Bookings.module.css";
import BookingsTabs from "./BookingsTabs/BookingsTabs";
import styling from "../Order/Order/Order.module.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
}));
const Bookings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={styling.nomob}>
        <AppNav />
      </div>
      <Container maxWidth="lg">
        <AppBar
          position="static"
          className={styling.nodesk}
          style={{ background: "white", width: "112%", marginLeft: "-20px" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,

                color: "#EA442B",
                fontWeight: "bold",
                textAlign: "left",
                padding: "1.5rem 0",
              }}
            >
              MEK VAHAN
            </Typography>
            <Button variant="contained" id={styling.sosbutton}>
              SOS
            </Button>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg" style={{ background: "f8f8f8" }}>
          <AppBar position="static" className={styles.appbar}>
            <Toolbar>
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
                <Button variant="default" className={styles.arrow}>
                  <ArrowBackIcon style={{ marginBottom: "2px" }} />
                </Button>
                Bookings
              </Typography>
            </Toolbar>
          </AppBar>
          <BookingsTabs />
        </Container>
      </Container>
    </div>
  );
};

export default Bookings;
