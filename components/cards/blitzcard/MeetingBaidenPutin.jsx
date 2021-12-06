import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: theme.spacing(4),
  },
  media: {
    height: 200,
  },
  main: {
    display: "flex",
    float: "left",
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Typography component="div" className={classes.main}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://ichef.bbci.co.uk/news/1024/branded_russian/CD4E/production/_116085525_tass_1464942.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Встреча Путина и Байдена
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Встреча президента России Владимира Путина с американским
              Президентом Джо Байденом может дать импульс переговорам Москвы и
              Вашингтона по актуальным вопросам.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() =>
              window.open(
                "https://inosmi.ru/politic/20211202/251039453.html?utm_source=yxnews&utm_medium=desktop"
              )
            }
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Typography>
  );
}
