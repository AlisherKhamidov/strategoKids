import { useNavigate } from 'react-router-dom';
import tournamentsStyle from './Tournaments.module.css';
import kid1 from './images/kid1.jpeg';
import kid2 from './images/kid2.jpeg';
import kid3 from './images/kid3.jpeg';
import tourImage from './images/IMG_1485.jpeg';
import Arrow from '../arrow/Arrow';
import TournamentCard from '../tournamentCard/TournamentCard';

export default function Tournaments(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
    <div className={tournamentsStyle.container}>
      <div className={tournamentsStyle.title}>
        <Arrow />
      </div>
      <img className={tournamentsStyle.tourImage} src={tourImage} alt="" />

    </div>
    <div className={tournamentsStyle.container3}>
      <button className={tournamentsStyle.orangeButton} type="button" onClick={() => navigate('/events')}>
      Записаться на турнир
      </button>
    </div>
    <div className={tournamentsStyle.container2}>
        <TournamentCard
          photo={kid1}
          title="Турнир дошкольников"
          description="Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц
    5000 руб. — 8 занятий по 60 минут за текущий месяц"
        />
        <TournamentCard
          photo={kid2}
          title="Осенний турнир школьников"
          description="Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц
    5000 руб. — 8 занятий по 60 минут за текущий месяц"
        />
        <TournamentCard
          photo={kid3}
          title="Турнир в ДК"
          description="Дети начинают с изучения правил. 3000 руб. — 4 занятия по 60 минут за текущий месяц
    5000 руб. — 8 занятий по 60 минут за текущий месяц"
        />
    </div>
    </>
  );
}
