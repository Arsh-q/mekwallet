// react and components
import React from "react";
import AppNav from "../../AppNav/AppNav";
import CancelCard from "../CancelCard/CancelCard";

// css
import "./Cancel.module.css";

// material ui components
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
}));
const Cancel = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppNav />
      <Container maxWidth="lg">
        <CancelCard />
      </Container>
    </div>
  );
};

export default Cancel;
