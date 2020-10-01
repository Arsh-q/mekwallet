import React from "react";
import Typography from "@material-ui/core/Typography";
import "../Order/Order/Order.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PrintIcon from "@material-ui/icons/Print";
const AppHeading = () => {
  return (
    <div>
      <div className="order">
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Typography
              variant="h5"
              className="order"
              style={{ fontWeight: "bold" }}
            >
              ORDER ID #1600437393
            </Typography>
          </Grid>
          <Grid item className="xyz" cs={2}>
            <Button className="print-button">
              <PrintIcon /> Print
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="confirm">
        <Typography variant="h5" className="" style={{ fontWeight: "bold" }}>
          Awaiting Partner Confirmation
        </Typography>
      </div>
    </div>
  );
};

export default AppHeading;
