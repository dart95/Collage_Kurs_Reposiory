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
            image="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/05/54/72/90/55/f86255140cd7.jpeg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Вышла драма Дом Гуччи
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              художественный фильм Ридли Скотта, премьера которого состоялась 9
              ноября 2021 года. Картина рассказывает об убийстве Маурицио Гуччи,
              которое произошло в 1995 году
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
