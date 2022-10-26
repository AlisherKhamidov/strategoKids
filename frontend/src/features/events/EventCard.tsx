/* eslint-disable @typescript-eslint/no-shadow */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import Event from './types/Event';
import style from './EventCard.module.css';
import { RootState } from '../../store';

interface EventPops {
event: Event;
handleRemove: (event: Event) => void;
handleUpdate: (newEvent: Event) => void;

}

function EventCard({ event, handleRemove,
  handleUpdate
}
  : EventPops
  ): JSX.Element {
    const user = useSelector((state: RootState) => state.auth.user);
    const [edit, setEdit] = useState(false);
    const [title, setTitle] = useState(event.title);
    const [photo, setPhoto] = useState(event.photo);
    const [description, setDescription] = useState(event.description);
    const [toggle, setToggle] = useState(true);
    const toggleHandler = (prev:boolean) => () => setToggle(!prev);

    const togleEdit = (): void => {
      if (edit) {
        handleUpdate({ ...event, title, photo, description });
      }
      setEdit((x) => !x);
    };
    const titleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTitle(event.target.value);
    };

    const photoChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setPhoto(event.target.value);
    };

    const descriptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setDescription(event.target.value);
    };

    const handleSubmit = (event: FormEvent) : void => {
      event.preventDefault();
      togleEdit();
    };
  return (
    <div className={style.card}>
      {user?.isAdmin && (
     <div>
        <button className={style.actionButton1} type="button" onClick={togleEdit}>edit
          <i className="chess pawn icon" />
        </button>
        <button className={style.actionButton2} type="button" onClick={() => handleRemove(event)}>delete
          <i />
        </button>
     </div>
   )}
      <div className={style.title}>{event.title}</div>
      {edit && (
        <form
          className={style.form}
          onSubmit={handleSubmit}
        >
          <label className={style.label}>
            Название группы
            <input
              type="text"
              value={title}
              // defaultValue={group.title}
              onChange={titleChange}
            />
          </label>
          <label className={style.label}>
            Ссылка на изображение
            <input
              type="text"
              value={photo}
              // defaultValue={group.title}
              onChange={photoChange}
            />
          </label>
          <label className={style.label}>
            Описание группы
            <input
              type="text"
              value={description}
              // defaultValue={group.title}
              onChange={descriptionChange}
            />
          </label>
          <button type="submit" style={{ display: 'none' }}>
            +
          </button>
        </form>
      )}
        <button className={style.whiteButton} type="button" onClick={toggleHandler(toggle)}>
         {toggle ? 'О группе' : 'Назад'}
        </button>
      {toggle ? <img className={style.image} src={event.photo} alt="" /> : (
        <div className={style.cardBlue}>
        <p>{event.description}</p>
        </div>
      )}
    </div>
  );
}

export default EventCard;
