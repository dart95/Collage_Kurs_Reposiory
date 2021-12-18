import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
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
          image="https://s3.zona.media/entry/960c71777220057a79d2713c82c22e27_1400x850"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="p">
            Запуск QR кодов в Казани
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
                "https://kzn.ru/meriya/press-tsentr/novosti/qr-kody-budut-proveryat-pri-obilechivanii-passazhirov-mintrans-rt/"
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
            <Typography paragraph>Тасс:</Typography>
            <Typography paragraph>
              Татарстан стал первым российским регионом, который в качестве
              борьбы с распространением коронавируса ввел обязательную проверку
              QR-кодов в общественном транспорте. Глава республики Рустам
              Минниханов пояснил, что новые ограничения продиктованы «сложной
              эпидемиологической обстановкой». «Транспорт — это та самая зона,
              где можно заразиться быстрее всего», — отметил он.
            </Typography>
            <Typography paragraph>
              Согласно данным сайта Стопкоронавирус.рф, за месяц в регионе
              выросло число заболевших (с 29,7 до 36,3 тысячи человек) и умерших
              (с 927 до 1,1 тысячи человек). За неделю тут выявляют от 31 до 90
              случаев заражений на 100 тысяч населения. Такую же низкую
              заболеваемость в России фиксируют только три региона: Чечня,
              Дагестан и Краснодарский край. В октябре главный санитарный врач
              республики Марина Патяшина оценивала ситуацию с распространением
              ковида как «очень неблагополучную», однако негативно высказывалась
              о введении кодов в транспорте: «Вы себе как представляете QR-код
              при общественном транспорте? Коллапс полный».
            </Typography>
            <Typography paragraph>
              В первый день проверять QR-коды у пассажиров на остановках
              помогали сотрудники Комитета по транспорту в мэрии Казани.
              «Метроэлектротранс» тем временем открыл вакансию для контролеров —
              им предстоит проверять QR-коды на станциях метрополитена.
              Кандидатам обещают зарплату от 20 тысяч рублей в месяц и полный
              соцпакет.
            </Typography>
            <Typography></Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Typography>
  );
}
