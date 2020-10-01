import React from "react";

// material ui components
import Paper from "@material-ui/core/Paper";
import styles from "../MekCoins.module.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";

const AmountCard = () => {
  return (
    <div className="">
      <Paper component="div" id={styles.amountCard}>
        <Grid container>
          <Grid xs={12}>
            <TextField
              type="number"
              id="standard-basic-lg"
              label="Enter Amount"
              className={styles.text}
              style={{ textAlign: "center", marginLeft: "2rem" }}
            />
            <Typography
              variant="subtitle1"
              style={{ textAlign: "center", margin: "1rem 0" }}
            >
              <Link to="#" style={{ color: "#ED1C24" }}>
                Have a promocode?
              </Link>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Button id={styles.rsmoneyCircle}>
                  <div id={styles.rsMoney}>500</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button id={styles.rsmoneyCircle}>
                  <div id={styles.rsMoney}>1000</div>
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button id={styles.rsmoneyCircle}>
                  <div id={styles.rsMoney}>2000</div>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ textAlign: "center" }}>
          <Button variant="contained" id={styles.addbtn}>
            Add Money
          </Button>
        </div>
        <Typography
          variant="subtitle2"
          style={{ textAlign: "center", padding: "1rem" }}
        >
          <Link to="#" style={{ color: "#ED1C24" }}>
            How to earn coins?
          </Link>
        </Typography>
      </Paper>
      <Grid container>
        <Grid xs={6}>
          <Button
            variant="contained"
            className={styles.secondaryBtn}
            style={{ float: "right" }}
          >
            Redeem Now
          </Button>
        </Grid>

        <Grid xs={6}>
          <Button variant="contained" className={styles.secondaryBtn}>
            Click Here
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AmountCard;
