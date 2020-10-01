import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import image from "./usericon2.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: "2rem auto",
      width: "52%",
      height: "auto",
    },
  },
}));
const FooterCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
        <Grid container>
          <Grid item xs={3}>
            <img src={image} alt="icon" className="footer-icon" />
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              gutterBottom
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "left",
                paddingTop: "1rem",
              }}
            >
              We can help you!
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: "black", textAlign: "left", fontWeight: 300 }}
            >
              Call us <b>+91 - 4972740914</b>
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ color: "black", textAlign: "left", fontWeight: 300 }}
            >
              Or chat with our customer support team
            </Typography>
          </Grid>

          <Grid
            item
            xs={3}
            style={{ paddingTop: "1.7rem", paddingRight: "2rem" }}
          >
            <Button variant="outlined" className="footerbutton">
              Chat with us
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FooterCard;
