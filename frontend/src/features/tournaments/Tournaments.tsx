import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import tournamentsStyle from './Tournaments.module.css';
import kid1 from './images/kid1.jpeg';
import kid2 from './images/kid2.jpeg';
import kid3 from './images/kid3.jpeg';
import tourImage from './images/IMG_1485.jpeg';
import Arrow from '../arrow/Arrow';
import TournamentCard from '../tournamentCard/TournamentCard';
import { RootState, useAppDispatch } from '../../store';
import { loadEvents } from '../events/eventsSlice';

export default function Tournaments(): JSX.Element {
  const eventsList = useSelector((state: RootState) => state.events.eventsArr);
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);
  console.log(eventsList);

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
      {user && !user.isAdmin ? (
         <button className={tournamentsStyle.orangeButton} type="button" onClick={() => navigate('/events')}>
         Записаться на турнир
         </button>
      ) : (
        null
      )}
    </div>
    <div className={tournamentsStyle.container2}>

   { eventsList.map((event) => {
if (event.isTournament) {
return (
      <TournamentCard
        key={event.id}
        photo={event.photo}
        title={event.title}
        description={event.description}
      />
    );
}
}).reverse().slice(0, 5)}
    </div>
    </>
  );
}
