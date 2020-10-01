import React from "react";

// css
import "../Profile/Profile.css";

// material ui components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Paper from "@material-ui/core/Paper";

// Icons
import CreateIcon from "@material-ui/icons/Create";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AttachmentIcon from "@material-ui/icons/Attachment";
const ProfileCard = () => {
  return (
    <Paper component="div" className="paper">
      <Card id="profile-card">
        <CardActionArea>
          <Button size="small" id="edit-btn">
            Edit Profile <CreateIcon />
          </Button>
          <CardMedia
            id="profile-card-img"
            image="https://picsum.photos/200/300"
            title="Contemplative Reptile"
          />
          <Typography variant="h6" id="name">
            Hello, Alex!
          </Typography>
          <CardContent>
            <Typography variant="h6" className="details">
              <PersonOutlineIcon style={{ paddingRight: "1rem" }} />
              Alex Panther
            </Typography>
            <Typography variant="h6" className="details">
              <PhoneIcon style={{ paddingRight: "1rem" }} />
              +91 - 32947473429
            </Typography>
            <Typography variant="h6" className="details">
              <MailOutlineIcon style={{ paddingRight: "1rem" }} />
              alexpanther01@gmail.com
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="contained" id="reset-btn">
            Reset Password
          </Button>
        </CardActions>
      </Card>
      <Card id="car-details">
        <Typography className="valid">Validity to:</Typography>
        <Typography className="valid-details" style={{ fontWeight: "bold" }}>
          RC number and image of primary vehicle
          <Button style={{ float: "right" }}>
            <AttachmentIcon
              style={{
                color: "#A7A7A7",
                transform: "rotate(315deg)",
              }}
            />
          </Button>
        </Typography>
        <Typography className="valid-details" style={{ fontWeight: "bold" }}>
          DL number and image
          <Button style={{ float: "right" }}>
            <AttachmentIcon
              style={{
                color: "#A7A7A7",
                transform: "rotate(315deg)",
              }}
            />
          </Button>
        </Typography>
        <Typography variant="subtitle1" id="warning">
          You cannot access full benefits of the app until verification.
        </Typography>
      </Card>
      <Button variant="contained" id="done-btn">
        Done
      </Button>
    </Paper>
  );
};

export default ProfileCard;
