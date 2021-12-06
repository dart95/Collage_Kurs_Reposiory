import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Lizardcard from "./cards//Freshcard/lizard";
import Irancard from "./cards//Freshcard/Iran";
import Kazan from "./cards/Freshcard/Kazan";
import SummetPutin from "./cards/blitzcard/summetPutin";
import MeetingBaidenPutin from "./cards/blitzcard/MeetingBaidenPutin";
import Gachihouse from "./cards/blitzcard/Gachihouse";
const useStyles = makeStyles((theme) => ({
  freshnews: {
    marginTop: "100px",

    marginLeft: "100px",
  },
  freshstyle: {
    marginTop: 100,
    margin: "auto",
    marginLeft: "37%",
    marginBottom: "20px",
    textshadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
  },
  blitzstyle: {
    clear: "both",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.freshnews}>
      <Typography variant="h2" className={classes.freshstyle}>
        Blitz News
      </Typography>
      <SummetPutin />
      <MeetingBaidenPutin />
      <Gachihouse />
      <Typography component="div" className={classes.blitzstyle}>
        <Typography variant="h2" className={classes.freshstyle}>
          Fresh News
        </Typography>
        <Kazan />
        <Irancard />
        <Lizardcard />
      </Typography>
    </Typography>
  );
}
