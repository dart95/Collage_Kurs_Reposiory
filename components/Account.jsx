import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Avatars from "./Avatars";
//import Image from "https://shirogames.com/wp-content/uploads/2019/04/Horse-warchiefs.png";

const useStyles = makeStyles((theme) => ({
  input: {
    width: "60vh",
    height: 55,

    border: "white",

    //why border make input invisible
  },
  container: {
    alignItems: "center",
    marginTop: "20px",
    clear: "both",
  },
  avatars: {},
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography>
        <Typography className={classes.avatars}>
          <Avatars></Avatars>
        </Typography>

        <Container maxWidth="sm" className={classes.container}>
          <input className={classes.input} placeholder="Post your news" />
          <Typography
            component="div"
            style={{
              backgroundColor: "#cfe8fc",
              height: "100vh",
              width: "60vh",
              marginTop: 20,
            }}
          ></Typography>
        </Container>
      </Typography>
    </React.Fragment>
  );
}
