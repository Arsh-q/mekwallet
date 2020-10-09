import React, { useState, useEffect } from "react";

// css
import styles from "./Order.module.css";

// components
import FooterCard from "../FooterCard/FooterCard";
import OrderDetails from "../OrderDetails/OrderDetails";
import CarCard from "../CarCard/CarCard";
import AppNav from "../../AppNav/AppNav";
import AppHeading from "../../AppHeading/AppHeading";
import BookingDetails from "../BookingDetails/BookingDetails";
import useFetch from "../useFetch";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// icons
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: "2rem",
    },
  },
}));

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjkzNzE0NjViOGFhNWM5ODRiODFjNTVhOTEyZTY2MzNlNTExZDJmZTkwMGQzYjZmNjJhOTNjYTRiNzVmNTE4MmI5NTc3NGQyYTAyYWQxN2UiLCJpYXQiOjE2MDIxMzE0MjQsIm5iZiI6MTYwMjEzMTQyNCwiZXhwIjoxNjMzNjY3NDI0LCJzdWIiOiIzMjMwIiwic2NvcGVzIjpbXX0.CfbpaA7j8Cbp5hUD4kauTWqCgNhJzFyi_5Cl7oWmpYSnYTp0EkatA5mO6QciqurEfQ108xrm9f_MBuHgEphRI4gG17nOwppMdpPoVGPOkZLNoaqmRUyLeI30kAoXgcqaR7uHmA01Jhvw9d26FGFDXuy-f9HveZ5OSpac0IFN320-ul2xZ78OvAy-6PQ8BZBdJ4fTjDtqgeLmqeJZMWTa_vooqPmVewpxVbwScPoXhkStwhd-q5UARD1pRVgC2M4TNVKWBJS58EABvEwisIo0hjt0YnHwdQrM7tQ1YugbO4gR6-LYgi9CX62G0rybk74-VR5hBOG02nGkafKpvvGg3rH9otTfmFs8mjQwTtynjTG9PTwZx86mDxk1N060CqIcOryDqoq78qDRfAKh6A1zGMc5fZ1Ib6wh4eVhQFJSorzR6eTYfXVYAlGuyvJqCsPEMM2gn9Mrnmc_mXT0CrDaOEDFGf7e4g8qJ4AF3Kr2Iq0C8xSMIsNx6h56aG38iMprrwekhqJYrDf4F8U8tLiGc2UAwy8oq11GajkWP0GHapeXUSNgZt5LxtZ-UxLC6Bp4k0H1-MEx_2vHdhaBpVgHGjKSHv2wGwN-YzFGSnvC2KZnpZgSzNzR1u4agzMKV-x_BPMP1dTKyoDc0_0cuCc_XE8swT3VM1YBVdJjFneDbX4";

let url = "https://mekvahan.com/api/getBookings";
// eslint-disable-next-line
const authToken = `Bearer ${token}`;
// console.log(authToken);

const Order = () => {
  const [orderData, setOrderData] = useState([]);
  const classes = useStyles();
  const data = useFetch(url, authToken);
  useEffect(() => {
    if (data.length > 0) {
      setOrderData(data[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  return (
    <div className={classes.root}>
      <div className={styles.nomob}>
        <AppNav className={styles.nomob} />
      </div>
      <AppBar
        position="static"
        className={styles.nodesk}
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
          <Button variant="contained" id={styles.sosbutton}>
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
      <AppHeading orderData={orderData} />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            component="div"
            className="containerlg"
            style={{
              backgroundColor: "#F6F6F6",
              height: "auto",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
          >
            <CarCard />
            <OrderDetails />
            <BookingDetails />
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                className={styles.button}
                // style={{ marginTop: "-32px" }}
                disableElevation
              >
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h4"
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      component="h2"
                    >
                      View Job Card
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </div>
          </Typography>
        </Container>
        <FooterCard />
      </React.Fragment>
    </div>
  );
};

export default Order;
