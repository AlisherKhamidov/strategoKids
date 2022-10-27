/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FormEvent, useEffect, useState, } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
// import { deleteEvent } from './api';
import Event from './types/Event';
import EventCard from './EventCard';
import { loadEvents, deleteEvent,
  updateEvent,
  addEvent
} from './eventsSlice';
import style from './Events.module.css';
import * as api from './api';

export default function Events(): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const user = useSelector((state: RootState) => state.auth.user);

    const eventsList = useSelector((state: RootState) => state.events.eventsArr);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    // api.addEvent(data);
    dispatch(addEvent(data));

  };
  const handleRemove = (eventToDelete: Event): void => {
    dispatch(deleteEvent(eventToDelete.id));
  };
  const handleUpdate = (newEvent: Event): void => {
      dispatch(updateEvent(newEvent));
    };

  return (
    <div className={style.container}>
      {user?.isAdmin && (
      <div className={style.containerForm}>
        <form onSubmit={handleSubmit} className={style.inputForm} encType="multipart/form-data">
          <input
            className={style.input}
            type="text"
            placeholder="Название события"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            name="title"
          />
          <input
            className={style.input}
            type="text"
            placeholder="Введите описание"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            name="description"
          />
          <input
            className={style.input}
            type="file"
            name="image"
            placeholder="Ссылка на фото"
            // value={photo}
            // onChange={(event) => setPhoto(event.target.value)}
          />
          <button className={style.inputButton} type="submit"> Создать мероприятие</button>
        </form>
      </div>
    )}
      { eventsList.map((event) => (
      <EventCard
        key={event.id}
        event={event}
        handleRemove={handleRemove}
        handleUpdate={handleUpdate}
      />
    )) }
    </div>
  );
}
