import React from 'react';
import { useForm } from 'react-hook-form';
import 'semantic-ui-css/semantic.min.css';
// import { Form, Input, Button, TextArea } from 'semantic-ui-react';
import style from './Application.module.css';
import sendApplication from './telegramApi';
import createApplication from './api';
import Data from './types/Data';

export default function Application(): JSX.Element {
  const { register, handleSubmit } = useForm<Data>();

  function onSubmit(data: Data): void {
    createApplication(data);
    sendApplication(data);
    }
  return (
    <div className={style.form__container}>
      <form className={style.forma} onSubmit={handleSubmit(onSubmit)}>
        <label className={style.label} htmlFor="input__kid">
          <span className={style.label__text}>Имя ребенка</span>
          <input className={style.input} id="input__kid" {...register('kidName')} required placeholder="Введите имя ребёнка" />
        </label>

        <label className={style.label} htmlFor="input__data">
          <span className={style.label__text}>Дата рождения ребёнка</span>
          <input className={style.input} type="date" id="input__data" {...register('birthDate')} required placeholder="00.00.0000" />
        </label>

        <label className={style.label} htmlFor="input__parent">
        <span className={style.label__text}>Имя родителя</span>
          <input className={style.input} id="input__parent" {...register('parentName')} required placeholder="Введите ваше имя" />
        </label>

        <label className={style.label} htmlFor="input__phone">
        <span className={style.label__text}>Телефон</span>
          <input className={style.input} id="input__phone" {...register('phone')} required placeholder="+7-000-000-00-00" />
        </label>

        <label className={style.label} htmlFor="input__text">
        <span className={style.label__text}>Опыт</span>
          <input className={style.input} id="input__text" {...register('phone')} placeholder="Опишите опыт вашего ребёнка в шахматах" />
        </label>

        <div className={style.btnPosition}>
      <button className={style.button} type="submit">
      Отправить заявку
      </button>
        </div>
      </form>
    </div>
  );
}
