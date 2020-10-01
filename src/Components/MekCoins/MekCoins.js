import React from "react";
import AppNav from "../AppNav/AppNav";

import styles from "./MekCoins.module.css";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AddCoinsCard from "./AddCoinsCard/AddCoinsCard";

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
        <AppNav />
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
          ></div>
          <AddCoinsCard />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default MekCoins;
