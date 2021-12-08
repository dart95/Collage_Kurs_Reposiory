import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  Logo: {
    height: "60px",
    pointerEvents: "none",
  },
}));
export default function ButtonLink() {
  const classes = useStyles();
  return (
    <img className={classes.Logo} src="../components/Img/react-js.svg"></img>
  );
}
