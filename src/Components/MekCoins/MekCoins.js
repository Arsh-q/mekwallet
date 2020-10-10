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
// import AddCoinsCardGold from "./AddCoinsCard/AddCoinsCardGold";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const useStyles2 = makeStyles((theme) => ({
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
  const classe = useStyles2();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Gold" {...a11yProps(0)} />
          <Tab label="Silver" {...a11yProps(1)} />
        </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
          <div
            style={{
              background: "#EAA937",
              width: "40%",
              height: "5px",
              boxShadow: "0px 3px 6px #00000029",
            }}
            className={styles.underline}
          ></div>
          <AddCoinsCard coin='gold' />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div
            style={{
              background: "#a7a7a7",
              width: "40%",
              marginLeft:'auto',
              height: "5px",
              boxShadow: "0px 3px 6px #00000029",
            }}
            className={styles.underline}
          ></div>
          <AddCoinsCard coin='silver' />
      </TabPanel>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default MekCoins;
