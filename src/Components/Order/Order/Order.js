import React from "react";
import "./Order.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FooterCard from "../FooterCard/FooterCard";
import CarCard from "../CarCard/CarCard";
import OrderDetails from "../OrderDetails/OrderDetails";
import AppNav from "../../AppNav/AppNav";
import AppHeading from "../../AppHeading/AppHeading";
import BookingDetails from "../BookingDetails/BookingDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
}));
const Order = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppNav />
      <AppHeading />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography
            component="div"
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
                className="button"
                style={{ marginTop: "-32px" }}
                disableElevation
              >
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Typography
                      className=""
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
