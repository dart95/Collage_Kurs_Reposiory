import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SVGicon from "../components/SVG";
import CarouselBox from "./CarouselBox";
import { makeStyles } from "@material-ui/core/styles";

export default function ButtonLink() {
  return (
    <Typography>
      <SVGicon />
      <CarouselBox
        style={{
          marginTop: 20,
        }}
      ></CarouselBox>
    </Typography>
  );
}
