import React from "react";

// img
import img from "./car.png";

// css
import styles from "../Order/Order.module.css";

// material ui components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const CarCard = () => {
  return (
    <div className="">
      <Card className={styles.card}>
        <AppBar position="static" style={{ background: "white" }}>
          <Toolbar>
            <Typography variant="h6" className={styles.title}>
              Vehicle Details
            </Typography>
          </Toolbar>
        </AppBar>
        <CardActionArea>
          <CardMedia className={styles.cardmedia} image={img} title="Car" />
          <CardContent>
            <Typography
              variant="h6"
              component="h2"
              style={{ fontWeight: "bold", textAlign: "center" }}
              className={styles.phonetxt}
            >
              WAGON R
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              className={styles.phonetxt}
              style={{
                fontWeight: "bold",
                color: "#EA442B",
                textAlign: "center",
              }}
            >
              CR V (CNG)
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              className={styles.phonetxt}
              component="h2"
              style={{ textAlign: "center" }}
            >
              DL2CE2789
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div
        className={styles.orderid}
        style={{ width: "80%", margin: "4rem auto", borderRadius: "5px" }}
      >
        <Grid container spacing={3} className={styles.nomob}>
          <Grid item xs={8}>
            <Typography
              gutterBottom
              className={styles.orderid}
              variant="h5"
              style={{ fontWeight: "bold", textAlign: "left" }}
              component="h2"
            >
              Order ID #1600437393
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              className={styles.orderid}
              gutterBottom
              variant="h5"
              style={{
                fontWeight: "bold",
                textAlign: "right",
                color: "#80DE14",
              }}
              component="h2"
            >
              Track Order
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CarCard;
