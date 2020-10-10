import React from "react";

// material ui components
import Paper from "@material-ui/core/Paper";
import styles from "../MekCoins.module.css";
import Grid from "@material-ui/core/Grid";
import AmountCard from "../AmountCard/AmountCard";
import FAQ from "../TabPanel/FAQ";

const AddCoinsCardGold = () => {
  return (
    <Paper component="div" className={styles.paper}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={styles.gold}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div id={styles.rscircle}>
                  <div id={styles.rsGold}>&#8377;</div>
                </div>
              </Grid>
              <Grid item xs={6} className={styles.coins}>
                Rs. 122
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.silver}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <div id={styles.rscirclesilver}>
                  <div id={styles.rsGold}>&#8377;</div>
                </div>
              </Grid>
              <Grid item xs={6} className={styles.coins}>
                Rs. 0
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <AmountCard />
      <FAQ />
    </Paper>
  );
};

export default AddCoinsCardGold;
