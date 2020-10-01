import React from "react";
import img from "./car.png";
import "../Order/Order.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    maxHeight: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const CarCard = () => {
  const classes = useStyles();

  return (
    <div className="">
      <Card className={classes.root}>
        <AppBar position="static" style={{ background: "white" }}>
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ color: "#979595", padding: "2rem " }}
            >
              Vehicle Details
            </Typography>
          </Toolbar>
        </AppBar>
        <CardActionArea>
          <CardMedia className="card-media" image={img} title="Car" />
          <CardContent>
            <Typography
              variant="h6"
              component="h2"
              style={{ fontWeight: "bold" }}
            >
              WAGON R
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              style={{ fontWeight: "bold", color: "#EA442B" }}
            >
              CR V (CNG)
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              DL2CE2789
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div
        className="orderid"
        style={{ width: "80%", margin: "4rem auto", borderRadius: "5px" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              className="orderid"
              variant="h5"
              style={{ fontWeight: "bold", textAlign: "left" }}
              component="h2"
            >
              Order ID #1600437393
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              className="orderid"
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
