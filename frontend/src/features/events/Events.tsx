/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { FormEvent, useEffect, useState, } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
// import { deleteEvent } from './api';
import Event from './types/Event';
import EventCard from './EventCard';
import { addEvent, loadEvents, deleteEvent,
  // updateEvent
} from './eventsSlice';

export default function Events(): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');

    const eventsList = useSelector((state: RootState) => state.events.eventsArr);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadEvents());
  }, [dispatch]);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    dispatch(addEvent({ title, description, photo, isTournament: true }));
  };
  const handleRemove = (eventToDelete: Event): void => {
    dispatch(deleteEvent(eventToDelete.id));
  };
  // const handleUpdate = (newEvent: Event): void => {
  //     dispatch(updateEvent(newEvent));
  //   };

  return (
    <>
      <h1>Здесь будут события ( или мероприятия)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="название"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="описание"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="ссылка на фото"
          value={photo}
          onChange={(event) => setPhoto(event.target.value)}
        />
        <button type="submit"> Создать мероприятие</button>
      </form>
      <h1>Events</h1>
      <div className="ui cards">
      { eventsList.map((event) => (
      <EventCard
        key={event.id}
        event={event}
        handleRemove={handleRemove}
        // handleUpdate={handleUpdate}
      />
    )) }
      </div>
    </>
  );
}
