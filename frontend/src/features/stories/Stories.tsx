import storiesStyle from './Stories.module.css';
import kid1 from './images/kid1.jpeg';
import kid2 from './images/kid2.jpeg';
import kid3 from './images/kid3.jpeg';
import kid4 from './images/kid4.jpeg';
import Card from '../card/Card';

export default function Stories(): JSX.Element {
  return (
    <div className={storiesStyle.container}>
        <Card
          photo={kid1}
          title="Расписание"
          description="Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц
5000 руб. — 8 занятий по 60 минут за текущий месяц"
          modal={false}
        />
        <Card
          photo={kid2}
          title="Арт-студия"
          modal={false}
          link="/art"
        />
        <Card
          photo={kid3}
          title="Котики против динозавров"
          description="Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц
5000 руб. — 8 занятий по 60 минут за текущий месяц"
        />
        <Card
          photo={kid4}
          title="Halloween"
          description="Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц
5000 руб. — 8 занятий по 60 минут за текущий месяц"
        />
    </div>
  );
}
