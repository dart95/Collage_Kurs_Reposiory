import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    gridAutoColumns: "row",
    height: 15,
    width: 30,

    "& > *": {
      margin: theme.spacing(2),
    },
    float: "right",
    marginRight: 50,

    clear: "both",
  },
}));
const defaultProps = {
  color: "secondary",
};

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge badgeContent={5} {...defaultProps}>
        <Avatar
          alt="Goat Warchief"
          src="https://cdna.artstation.com/p/assets/images/images/015/232/744/large/ilya-loginov-1.jpg?1548248256"
        ></Avatar>
      </Badge>
      <Badge badgeContent={1} {...defaultProps}>
        <Avatar
          alt="Kraken Warchief"
          src="https://shirogames.com/wp-content/uploads/2019/04/Horse-warchiefs.png"
        />
      </Badge>
      <Badge>
        <Avatar
          alt="Cindy Baker"
          src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/25920479/d4e1a2c7fc96b130b97bd04af251b7d59c1904f4.png"
        />
      </Badge>
    </div>
  );
}
