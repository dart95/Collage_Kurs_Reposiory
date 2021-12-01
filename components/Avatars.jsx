import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    gridAutoColumns: "colums",
    height: 15,
    width: 30,
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <Avatar alt="Goat Warchief" src="/icons/Goatwarchif.jpg" />
      <Avatar alt="Kraken Warchief" src="/icons/krakenwarchif.jpg" />
      <Avatar alt="Cindy Baker" src="./static/images/avatar/3.jpg" />
    </Typography>
  );
}
