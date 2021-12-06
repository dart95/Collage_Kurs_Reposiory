import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    maxWidth: 700,
    width: 400,
    margin: theme.spacing(4),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  main: {
    display: "flex",
    float: "left",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Typography component="div" className={classes.main}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://cdnn1.inosmi.ru/images/25077/96/250779613.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="p">
            Норвегия ограничивает НАТО
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
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
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph> РИА Новости:</Typography>
            <Typography paragraph>
              Глава МИД Норвегии Анникен Витфельдт заявила в беседе с газетой
              VG, что новое правительство страны выступает за ограничение
              передвижения союзников Осло по НАТО около границ России.
            </Typography>
            <Typography paragraph>
              Для Норвегии важно военное присутствие в близлежащих к нам
              районах. Но, по нашему мнению, будет лучше, если в
              непосредственной близости от российской границы мы будем
              справляться сами — с помощью норвежских самолетов и фрегатов", —
              сказала она. Дипломат рассказала, что планирует обсудить этот
              вопрос с Великобританией и США, и подчеркнула, что действует в
              интересах своей страны. При этом Витфельдт отметила, что сейчас
              присутствие американских ВС в районе около границы с Россией не
              больше, чем в другие периоды "послевоенной эпохи".
            </Typography>
            <Typography paragraph>
              Анникен Витфельдт: Я хочу поговорить об этом с Великобританией и
              США. Они могут принимать решения сами. Но мы, в свою очередь,
              должны защищать интересы Норвегии. А в норвежских интересах
              заботиться об обороне этих районов самостоятельно, силами
              норвежских вооруженных сил.
            </Typography>
            <Typography>
              е позиция близка к позиции бывшего главы оперативного штаба
              вооруженных сил Норвегии Руне Якобсена (Rune Jakobsen), о которой
              он рассказывал VG в прошлом году. Он резко раскритиковал эти
              передвижения в Баренцевом море, что привлекло много внимания:
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Typography>
  );
}
