import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
// import { ReactSVG } from "react-svg";
// import SVGicon from "./SVG";
// import Reactsvg from "./Img/react-js";

export default function ButtonLink() {
  return (
    <Typography>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        Button Link
      </Link>

      <img src="../components/Img/react-js.svg"></img>
    </Typography>
  );
}
