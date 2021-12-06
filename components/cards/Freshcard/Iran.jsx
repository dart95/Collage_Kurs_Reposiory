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
    width: 400,
    maxWidth: 700,
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
          image="https://www.hawarnews.com/ru/uploads/2018/05/10/163910_213802_iran.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="p">
            Иранская ядерная программа
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
                "https://www.dw.com/ru/%D0%B8%D1%80%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-%D1%8F%D0%B4%D0%B5%D1%80%D0%BD%D0%B0%D1%8F-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0/t-17438436"
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
            <Typography paragraph>BBC:</Typography>
            <Typography paragraph>
              По утверждению Тегерана, это комплекс научно-производственных
              мероприятий по развитию в стране атомной энергетики. Однако США и
              ряд других стран подозревают Иран в секретных работах по созданию
              ядерного оружия.
            </Typography>
            <Typography paragraph>
              Иран с 1958 года является членом Международного агентства по
              атомной энергии (МАГАТЭ). В 1963 году Исламская Республика
              присоединилась к Договору о запрещении испытаний ядерного оружия в
              атмосфере, космическом пространстве и под водой, который подписали
              СССР, США и Великобритания. Позже США и ряд других стран стали
              подозревать Иран в разработке ядерного оружия, чему в немалой
              степени способствовали систематические угрозы со стороны Ирана в
              адрес Израиля. Экономические санкции по отношению к Ирану, впервые
              введенные США после исламской революции, были расширены, к ним
              присоединились другие страны. В июле 2015 года в Вене Иран и
              страны "шестерки"
            </Typography>
            <Typography paragraph>
              (США, Великобритания, Франция, Германия, Китай, Россия) достигли
              соглашения по иранской ядерной программе - Совместный
              всеобъемлющий план действий. В январе 2016 года МАГАТЭ объявило,
              что Тегеран выполнил условия, необходимые для вступления венских
              договоренностей в силу, что означало поэтапное смягчение санкций.
              Однако через год президент США Дональд Трамп заявил о намерении
              ввести новые санкции против Ирана, а 12 января 2018 года - о
              необходимости ревизии так называемой ядерной сделки с Ираном.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Typography>
  );
}
