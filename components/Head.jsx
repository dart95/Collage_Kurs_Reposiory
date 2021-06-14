import React from "react";
import { Button } from "@material-ui/core";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { mergeClasses } from "@material-ui/styles";
import { blue } from "@material-ui/core/colors";
import Menuicon from "./icons/menuicon.png";
import ReactDOM from "react-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Redirect } from "react-router";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

//
export default function SimpleMenu() {
  // const theme = createMuiTheme();
  const useStyles = makeStyles((theme) => ({
    root: {
      //background: "linear-gradient(45deg, #D6D6D6 20%, #4682B4 80%)",
      border: 0,
      //boxShadow: "0 3px 5px 2px rgba(0, 0, 128, .3)",
      //padding: "0 20px",
      //height: 20,
    },
    menu: {
      // background: "linear-gradient(45deg, #FF0000 20%, #4682B4 80%)",
    },
    proffyle: {
      background: "linear-gradient(45deg, #FF0000 20%, #4682B4 80%)",
      padding: 2,
      marginBottom: theme.spacing(1),
    },
    myaccaunt: {
      background: "linear-gradient(45deg, #D6D6D6 20%, #4682B4 80%)",
      padding: 3,
      marginBottom: theme.spacing(1),
    },
    news: {
      background: "linear-gradient(45deg, #e5a239 20%, #4682B4 80%)",
      padding: 2,
      marginBottom: theme.spacing(1),
    },
    icon: {
      width: 30,
      height: 30,
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const history = useHistory();

  function redirectprofile() {
    history.push("/profile");
  }

  function redirectMyaccaunt() {
    history.push("/my-account");
  }

  function redirectNews() {
    history.push("/news");
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.root}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className={classes.icon} />
      </Button>

      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.proffyle} onClick={redirectprofile}>
          Profile
        </MenuItem>
        <MenuItem className={classes.myaccaunt} onClick={redirectMyaccaunt}>
          My account
        </MenuItem>
        <MenuItem className={classes.news} onClick={redirectNews}>
          News
        </MenuItem>
      </Menu>
    </div>
  );
}
