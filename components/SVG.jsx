import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  "@keyframes spinAnimation": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(180deg)" },
  },
  Logo: {
    height: "30vmin",
    pointerEvents: "none",

    marginTop: "20px",
    "@media (prefers-reduced-motion: no-preference)": {
      animation: "$spinAnimation infinite 10s linear",
    },
  },
  center: {
    backgroundColor: "#321E97FF",
    width: "100%",
  },
}));

export default function ButtonLink() {
  const classes = useStyles();
  return (
    <center className={classes.center}>
      <img className={classes.Logo} src="../components/Img/react-js.svg"></img>
    </center>
  );
}
