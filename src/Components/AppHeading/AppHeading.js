import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../Order/Order/Order.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
const AppHeading = ({ orderData }) => {
  console.log(orderData.regular_service);
  const orderID = orderData.booking_id;
  // const carImg = orderData.
  return (
    <div>
      <div className={styles.order}>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Typography
              variant="h5"
              className={styles.order}
              style={{ fontWeight: "bold" }}
            >
              ORDER ID #{orderID}
            </Typography>
          </Grid>
          <Grid item className={styles.xyz} cs={2}>
            <Button className={styles.printbutton}>
              <PrintIcon /> Print
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={styles.confirm}>
        <Typography style={{ fontWeight: "bold" }}>
          Awaiting Partner Confirmation
        </Typography>
      </div>
    </div>
  );
};

export default AppHeading;
