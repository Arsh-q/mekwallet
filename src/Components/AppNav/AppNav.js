import React from "react";
import "../Order/Order/Order.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import MyLocationRoundedIcon from "@material-ui/icons/MyLocationRounded";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "2rem",
  },
  title: {
    flexGrow: 1,
    color: "#EA442B",
    fontWeight: "bold",
    textAlign: "left",
    padding: "2rem 0",
  },
}));
const AppNav = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            MEK VAHAN
          </Typography>
          <Button variant="contained" id="sos-button">
            SOS
          </Button>
          <FormControl className={classes.margin}>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              size="small"
              value="Ranchi, Jha..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: "#EA442B" }}>
                    <MyLocationRoundedIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <IconButton
            edge="start"
            className={classes.menuButton}
            // color=""
            aria-label="menu"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNav;
