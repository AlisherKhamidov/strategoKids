import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadEvents } from '../events/eventsSlice';
import { loadLikes } from '../likes/likesSlice';
// import { loadLikes } from '../likes/api';
import kidStyle from './Kid.module.css';
import Kid from './types/Kid';

interface ParentProp {
 kid: Kid
}

function KidCard({ kid }: ParentProp): JSX.Element {
    const likes = useSelector((state: RootState) => state.likes.likesArr);
    const events = useSelector((state: RootState) => state.events.eventsArr);
    const dispatch = useAppDispatch();
    useEffect(() => { dispatch(loadLikes()); dispatch(loadEvents()); }, [dispatch]);

    return (
        <div className={kidStyle.kid__card}>
            <span className={kidStyle.kid__name}>{kid.name}</span>
            <span>{kid.secondName}</span>
            <span>{kid.middleName}</span>
            <span className={kidStyle.text}>Участвует в:</span>
            {/* <span>{kid.birthDate}</span>
            <div>{kid.phone}</div> */}
            {/* .filter((kid) =>
              !likes.some((like) => like.event_id === event.id && like.kid_id === kid.id)) */}
              <div className={kidStyle.list}>
            {events.filter((event) =>
             likes.some((like) => like.event_id === event.id && like.kid_id === kid.id))
             .map((event) => <div className={kidStyle.string} key={event.id}>{event.title}</div>)}
              </div>
            <button className={kidStyle.kid__btn__first} type="button">Изменить</button>
            <button className={kidStyle.kid__btn__second} type="button">Удалить</button>

        </div>
    );
}

export default KidCard;
