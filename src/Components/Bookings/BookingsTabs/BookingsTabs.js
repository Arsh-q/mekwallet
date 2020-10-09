import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import styles from "../Bookings.module.css";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import BuildIcon from "@material-ui/icons/BuildOutlined";
import MapIcon from "@material-ui/icons/MapOutlined";
import BookingCard from "../BookingCard/BookingCard";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={styles.paper}>
      <AppBar
        position="static"
        color="default"
        style={{ width: "90%", margin: "0 auto" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          className={styles.tabs}
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab
            label={
              <div>
                <SettingsIcon className={styles.icon} />
                <span className={styles.heading}> Regular</span>
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div>
                <BuildIcon className={styles.icon} />
                <span className={styles.heading}> SOS</span>
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div>
                <MapIcon className={styles.icon} />
                <span className={styles.heading}> OutStation</span>
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel
        style={{ width: "90%", margin: "0 auto" }}
        value={value}
        index={0}
      >
        <BookingCard />
        <BookingCard />
      </TabPanel>
      <TabPanel
        style={{ width: "90%", margin: "0 auto" }}
        value={value}
        index={1}
      >
        <BookingCard />
      </TabPanel>
      <TabPanel
        style={{ width: "90%", margin: "0 auto" }}
        value={value}
        index={2}
      >
        Item Three
      </TabPanel>
    </Paper>
  );
}
