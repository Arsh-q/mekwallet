import React from "react";
import AppNav from "../AppNav/AppNav";

import styles from "./MekCoins.module.css";
import styling from "../Order/Order/Order.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AddCoinsCard from "./AddCoinsCard/AddCoinsCard";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
}));

const theme = createMuiTheme({
  palette: {
    background: {
      default: "white",
    },
  },
});
const MekCoins = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <div className={styling.nomob}>
          <AppNav />
        </div>
        <AppBar
          position="static"
          className={styling.nodesk}
          style={{ background: "white" }}
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
          <AppBar position="static" className={styles.app}>
            <Toolbar>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                MekCoins
              </Typography>
            </Toolbar>
          </AppBar>
          <div
            style={{
              background: "#EAA937",
              width: "40%",
              height: "5px",
              boxShadow: "0px 3px 6px #00000029",
            }}
            className={styles.underline}
          ></div>
          <AddCoinsCard />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default MekCoins;
