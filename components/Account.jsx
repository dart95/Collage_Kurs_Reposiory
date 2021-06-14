import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Avatars from "./Avatars";

const useStyles = makeStyles((theme) => ({
  input: {
    position: "static",

    width: 545,
    height: 55,
    marginTop: 19,
    marginLeft: 475,
    border: "white",
    //why border make input invisible
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <input className={classes.input} placeholder="Post your news" />
      <Avatars />
      <Container maxWidth="sm">
        <Typography component="div" style={[]} />
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "100vh",
            width: "550px",
            marginTop: 10,
          }}
        />
      </Container>
    </React.Fragment>
  );
}
