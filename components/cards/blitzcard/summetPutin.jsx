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
            image="https://static.euronews.com/articles/stories/06/17/78/60/1440x810_cmsv2_0d4b74b5-d67f-55ff-938e-9eafa5f10434-6177860.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Турецкий подарок Украине
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Турецкая республика продала Украине беспилотники Bayraktar TB2 за
              символические 80 тысяч долларов, из-за концентрирования Российских
              войск на границе с Украиной. Пресс служба Украины
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
