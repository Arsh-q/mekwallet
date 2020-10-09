// react and component
import React from "react";
import AppNav from "../../AppNav/AppNav";
import ProfileCard from "../ProfileCard/ProfileCard";

//css
import styles from "./Profile.module.css";
import styling from "../../Order/Order/Order.module.css";

//material ui components
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
const Profile = () => {
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
          <AppBar position="static" className={styles.appbar}>
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
