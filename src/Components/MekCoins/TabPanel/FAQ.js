import React from "react";
import useFetch from "../../Order/useFetch";
import useSwallet from "../../Order/useSwallet";

// css
import styles from "../MekCoins.module.css";

// material ui components
import PropTypes from "prop-types";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

// icons
import PaymentIcon from "@material-ui/icons/Payment";
import ForumIcon from "@material-ui/icons/Forum";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDU2Y2IyY2QxZDllMmU0YmYyOGYxNzYxY2E0ZjQ2ZTViZTNiODMwYjM3ZjkwNDc3NDAxZGU0YjA3NjM4YTZlYzIyNDk5NDkwYmRhMzZiYzEiLCJpYXQiOjE1OTM1MTk5MjksIm5iZiI6MTU5MzUxOTkyOSwiZXhwIjoxNjI1MDU1OTI5LCJzdWIiOiI1NDkiLCJzY29wZXMiOltdfQ.rUVg4zlmWuezB-bfwsxUwJxfbYhYOmf3wmHh0ZNduyy06ei_zGxZdd8WQqF-YNgdaBqCg3IfmMBgvrVFU39Jjvg-g6ga5Br8_Lk2Zn5y7h-Ev4qdsq1IoKg9IFyikwX_QPTq3Kf7_VYY78OUeLhx1lo7UU5lul7_3GDLnr6JD5aEtHGPrrVjHkzQObf1gx3QRLRdfHQWhdGsKT1xkmdVpP173CmYK1VfyyjXZZaAshCRZr9-HefTojPi6YM7Wt0CTi7-AXpjnXFaqXyxOHhLsvMoFgIrUArLIv_70X2gyAu4-NxnRYzFpduKNr4qWj-Isy04s-NxfPVc1MTOfvYc82EgfgayOITH0gV2de-KUih4220-h2aqUNfQ2bIqDWiBEO-D2EED6uP0kMddHHourEsiovUVoFQT4q_oiuS0oPLn1Kc9uswzMJmJOMLgVaDuEMQaf8vXY7He65DfTg9u3r1-oNO2h3tVd4hAuVzVG3JLGl1toO0KSHfSXYYAczlX41w1FjQmEMVWQP3cG0h06W7bZxHHJHbHtr2bGoyY_f8MtjQoYgeSAUOxoO5z02N1Gckak9jSP8E9f_n76pHrkmXQzz3zlX9ipGI5qXwKubmDw-R_933-o4eaZnqZU_wessVWi7wnNCgGBjrNd00NdMIFnTlnn2wJZx-_PAk0mnc";

let url = "https://mekvahan.com/api/user/statements";
let s_url = "https://mekvahan.com/api/user/my_swallet";

const s_token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2E0ZTA5YmVjYTczZTcxYmYxODIwYTgxNTRkYzZjZGI2NDAyMDhjNTVlOGYyMTc3OGE1ZjMyYzBlNjY0ODk3ZjAxOTA3ODFhYmQzMWJlZDQiLCJpYXQiOjE2MDIzMTY2MDcsIm5iZiI6MTYwMjMxNjYwNywiZXhwIjoxNjMzODUyNjA3LCJzdWIiOiIxNSIsInNjb3BlcyI6W119.YujRJyRLguZl7tT0aUBlqwamMl2fOeOeePsjWrPfF6qT6b0C-WhP_ZEfb6StwjAzWu7fvo-grpYzGK2Gr8z_dewkUNx3rLfY7mpuI4wMP-Hj4WsbLgXiEDnFPe3pLByXcXf0_FXAMPyJU6waMmXBol_b4kqtvZwbb_Jqf285lPepW313EiWuOEKhramn3LTeUWG2a_qBq_42Lg7F58VqvZif3a54PMNRrhxhdD_iEpjkbZNqDoJvde4PYrsrpeE94NEqyxcqbQbnR86HylbP3Fs7H6NXy5i6_qdkSAAf3nbIQt2ZPNrVN5FeX1BcPOx8vCfL_x9NZvFLzhO9gI6ypfaY6HjwdfBtBlC6fML_A-Nd9RmYZsGT0mNLgFgMpIIiHYeGFyCKjIXjy2oyD3u5zJhMzq1wfHHZbhUqFq8JicPc_-EqYgQQ-RWtnxmi2nhe8yTBXSZEaPf7nTM-lgKygvcx7Mx7ZG3fZWVOJafbYiwalC7V50jVtSO_dQSVm3Mcn3qCfeMd0wPM_TYZnlCU-AMO53OOcZ3vrWgvoYb683tuTJwas0wT4oDK-GUh5knhIZiEoaa4G6eKky3i__0uyPuGg4LeFezzX_V9NMLDZ7ED37DTckyxxK0kAqkiYK1QOtcY0sxYJBq61XAtWhMzTgjZ14GIHNG4jNASge0zT04';
// eslint-disable-next-line
const authToken = `Bearer ${token}`;
const s_authToken = `Bearer ${s_token}`;
let wdata = [];
const FAQ = () => {
  wdata = useFetch(url, authToken);
  console.log(wdata);
  const sdata = useSwallet(s_url, s_token);
  console.log(sdata);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    {wdata.length > 0 ? 


    {/* <Paper component="div" className={styles.tabs}>
      <div className={classes.root}>
        <AppBar position="static" id={styles.tabsApp}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            centered
          >
            <Tab
              icon={<PaymentIcon />}
              label="Statements"
              {...a11yProps(0)}
              style={{ textTransform: "none", width: "100%" }}
              wrapped="true"
              className={styles.tabHeader}
            />
            <Tab
              icon={<ForumIcon />}
              label="FAQ"
              {...a11yProps(1)}
              style={{ textTransform: "none" }}
              className={styles.tabHeader}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>History</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ width: "100%", textAlign: "center" }}>
                {wdata.map((elem) => (
                  <>
                    <ul
                      style={{
                        justifyContent: "space-between",
                        padding: "0",
                        listStyle: "none",
                        display: "flex",
                      }}
                    >
                      <li>{new Date(elem.created_at).toUTCString()}</li>
                      {elem.credit === "0.00" ? null : (
                        <>
                          <li style={{ color: "red", width: "50%" }}>
                            -Rs. {elem.credit}
                          </li>
                        </>
                      )}
                      {elem.debit === "0.00" ? null : (
                        <>
                          <li style={{ color: "#42bc42", width: "50%" }}>
                            +Rs. {elem.debit}
                          </li>
                        </>
                      )}
                    </ul>
                  </>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What's new with the Mekvahan(S) coins?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We have made the rules quite simple and more beneficial fol all
                the users! Now you can use flat 1% - 100% wallet amout of the
                transaction amount, instead of the wallet balance
                available.(please refer to 'How MekCoins wallet works?' for
                detailed explanation) Earn & Save much more Wallet Balance than
                ever before and you can save flat 1% to 100% of the transaction
                value on any service, basis the specific offer on the category.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>
                Is there any minimum transaction limit to use MekCoins(S)
                wallet?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There is no minimum transaction limit for using MekCoins (S)
                wallet on any service category.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                How do I check my MekCoins(S) wallet balance & validity?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                In the 'Statement' section of the page of Mekcoins Wallet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                Can We transfer MekCoins (S) wallet to another person's wallets?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We can transfer MekCoins (S) wallet to another person's wallet
                (Admin Decides)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                How do I check earn MekCoins (S) wallet?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                App install Offers/promo codes/coupons/cashbacks can be used to
                earn MekCoins (S) wallet, which is automatically credited in
                your wallet basis the specific T&C of the offer. You can add
                MekCoins(S) wallet with the help of the coupon codes on the
                redeem voucher page or any offline coupon card distributed. In
                one transaction, you can either
                <ul>
                  <li>Earn new MekCoins(S) as cashback</li>
                  <li>Use the existing Mekcoins(S) as Discount</li>
                </ul>
                Depending on the offer and T&C applied.
              </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion style={{ background: "#F8F8F8" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>
                    Will user's Mekcoins (G) wallet amount or any other amount
                    expire?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    In the 'Statement' section of the page of Mekcoins Wallet.
                  </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                How MekCoins Wallet works?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                MekCoins Wallet is a way of ensuring that you get a discount on
                each transaction. MekCoins Wallet coins work on the same lines
                as cashback, only difference being it gives you a variable 1% to
                100% discount on every transaction. For instance, you have
                selected a service of Rs. 5,000 & you have Rs. 600 as
                MekCoins(S) in your wallet with a restriction applied of 5% by
                the admin side. Now, while making a transaction of Rs. 5,000 you
                use 5% of your total transaction value i.e. Rs. 250.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                When does my earned MekCoins (S) wallet expire?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We constantly take user's suggestions and evolving MekCoins (S)
                wallet. Going forward, we have given validity of 1-year on
                MekCoins (S) wallet amount to the users or it may depend on the
                offers or T&C applied. Mekcoins (S) wallet is used in a
                chronolgical order i.e. Mekcoins (S) wallet which has been
                earned earlier will be utilized before as default. The usage of
                the unrestricted cash will be done in 'First in First out'
                (FIFO) manner.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ background: "#F8F8F8" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>
                How and where can I use Mekcoins (S) wallet amount?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Mekcoins (S) wallet can be sued across categories mentioned in
                the app. You can save a flat any discount from 1% to 100% of
                your transaction amount i.e. if a 5% restriction on the wallet
                applied by the admin either depending on service category or
                subcategory or service to service or as a whole wallet system
                than 5% of the transaction amount will be deducted from your
                Mekcoins(S) wallet balance (up to Rs. 1000 in a single
                transaction).
              </Typography>
            </AccordionDetails>
          </Accordion>
        </TabPanel>
      </div>
    </Paper> */}
    :null}
    
    </>
  );
};
export default FAQ;
