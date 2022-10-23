import { useNavigate } from 'react-router-dom';
import tournamentsStyle from './Tournaments.module.css';
import tourImage from './images/IMG_1485.jpeg';
import Arrow from '../arrow/Arrow';

export default function Tournaments(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className={tournamentsStyle.container}>
      <div className={tournamentsStyle.title}>
        <Arrow />
      </div>
      <img className={tournamentsStyle.tourImage} src={tourImage} alt="" />
      <button className={tournamentsStyle.orangeButton} type="button" onClick={() => navigate('/events')}>
      Записаться на турнир
      </button>
    </div>
  );
}
