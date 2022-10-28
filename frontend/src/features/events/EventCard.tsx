/* eslint-disable @typescript-eslint/no-shadow */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import Event from './types/Event';
import style from './EventCard.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addLike } from '../likes/likesSlice';
import LikeData from '../likes/types/LikeData';

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
  const kids = useSelector((state: RootState) => state.kids.kidsArr);
  const likes = useSelector((state: RootState) => state.likes.likesArr);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(event.title);
  const [photo, setPhoto] = useState(event.photo);
  const [description, setDescription] = useState(event.description);
  const [toggle, setToggle] = useState(true);
  const [choice, setChoice] = useState(true);
  const dispatch = useAppDispatch();
  const toggleHandler = (prev: boolean) => () => {
    setToggle(!prev);
    if (!choice) { setChoice(true); }
  };
  const choiceHanler = (prev: boolean) => () => {
    setChoice(!prev);
    if (!toggle) { setToggle(true); }
  };

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

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    togleEdit();
  };

  const handleSubmitLike = (likeData: LikeData): void => {
    dispatch(addLike(likeData));
  };

  return (
    <div className={style.card}>
      {user?.isAdmin && (
        <>
          <div className={style.title}>{event.title}</div>
          {edit && (
            <form
              className={style.form}
              onSubmit={handleSubmit}
            >
              <label className={style.label}>
                <div className={style.form}>Название мероприятия</div>
                <input
                  className={style.input}
                  type="text"
                  value={title}
                  onChange={titleChange}
                />
              </label>
              <label className={style.label}>
                <div>Ссылка на изображение</div>
                <input
                  className={style.input}
                  type="text"
                  value={photo}
                  onChange={photoChange}
                />
              </label>
              <label className={style.label}>
                <div>Описание мероприятия</div>
                <input
                  className={style.input}
                  type="text"
                  value={description}
                  onChange={descriptionChange}
                />
              </label>
              <button type="submit" style={{ display: 'none' }}>
                +
              </button>
            </form>
          )}
          <div className={style.buttonsContainer}>
            <button className={style.actionButton1} type="button" onClick={togleEdit}>
              Изменить
            </button>
            <button
              className={style.actionButton2}
              type="button"
              onClick={toggleHandler(toggle)}
            >
              {toggle ? 'О событии' : 'Назад'}
            </button>
            <button className={style.actionButton3} type="button" onClick={() => handleRemove(event)}>
              Удалить
            </button>
          </div>
        </>
      )}
      {!user && (
        <>
          <div className={style.title}>{event.title}</div>
          <div className={style.buttonsContainer}>
            <button
              className={style.actionButton4}
              type="button"
              onClick={toggleHandler(toggle)}
            >
              {toggle ? 'О событии' : 'Назад'}
            </button>
          </div>
        </>
      )}
      {user && !user?.isAdmin && (
        <>
          <div className={style.title}>{event.title}</div>
          <div className={style.buttonsContainer}>
            <button
              className={style.actionButton1}
              type="button"
              onClick={toggleHandler(toggle)}
            >
              {toggle ? 'О событии' : 'Назад'}
            </button>
            <button
              className={style.actionButton3}
              type="button"
              onClick={choiceHanler(choice)}
            >
              {choice ? 'Записаться' : 'Назад'}
            </button>
          </div>
        </>
      )}
      {toggle ? <img className={style.image} src={event.photo} alt="" /> : (
        <div className={style.cardChoice}>
          <p>{event.description}</p>
        </div>
      )}

      {choice ? <img className={style.image} src={event.photo} alt="" /> : (
        <div className={style.cardBlue}>
          {kids
            .filter((kid) => kid.user_id === user?.id)
            .filter((kid) =>
              !likes.some((like) => like.event_id === event.id && like.kid_id === kid.id))
            .map((myKid) => (
              <button
                className={style.actionButton5}
                onClick={() => handleSubmitLike({ kid_id: myKid.id, event_id: event.id })}
                key={myKid.id}
                type="button"
              >{myKid.name} {' '} {myKid.secondName}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default EventCard;
