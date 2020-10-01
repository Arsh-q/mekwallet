// react and component
import React from "react";
import AppNav from "../../AppNav/AppNav";
import ProfileCard from "../ProfileCard/ProfileCard";

//css
import "./Profile.css";

//material ui components
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppNav />
        <Container maxWidth="lg" style={{ background: "f8f8f8" }}>
          <AppBar position="static" className="appbar">
            <Toolbar>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                Profile
              </Typography>
            </Toolbar>
          </AppBar>
          <ProfileCard />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Profile;
