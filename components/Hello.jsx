import React, { Profiler } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Head from "./Head";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles";
import { alpha } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Account from "./Account";
import Fade from "@material-ui/core/Fade";
import News from "./News";
import Succsess from "./succses";
import Snackbar from "@material-ui/core/Snackbar";
//import Loginform from "./Loginform";

/*async function Getitem() {
  let get = await fetch(" http://localhost:8000/api/config/")
    .then((resp) => resp.json())

    .then((conf) => console.log(conf));
}*/
//Getitem();
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    flexGrow: 1,
    margin: 0,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 10,
    marginLeft: theme.spacing(3.6),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Head
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></Head>
            <Typography variant="h6" className={classes.title}>
              <Switch>
                <Route path="/profile">Profile</Route>
                <Route path="/my-account">My account</Route>
                <Route path="/news">News</Route>
                <Route path="/">Main</Route>
              </Switch>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Succsess></Succsess>
          </Toolbar>
        </AppBar>
        <div className={classes.maincontainer}></div>
      </div>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/my-account">
          <Account />
        </Route>
        <Route path="/news">
          <News />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
