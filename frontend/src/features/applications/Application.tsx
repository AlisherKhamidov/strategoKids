import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import style from './Application.module.css';
import sendApplication from './telegramApi';
import createApplication from './api';
import Data from './types/Data';

export default function Application(): JSX.Element {
  const { register, handleSubmit, formState: { errors }, setError, } = useForm<Data>();
  const navigate = useNavigate();
  const submit = handleSubmit(async (data: Data) => {
    createApplication(data)
    .then(() => {
      sendApplication(data);
      navigate('/');
    })
    .catch((error) => {
      if (error === 'Введите полное имя, пожалуйста') {
        setError('kidName', {
          type: 'multiple',
          message: error,
        });
      }
      if (error === 'Введите корректный номер, пожалуйста') {
          setError('phone', {
            type: 'multiple',
            message: error,
          });
        }
      });
    });
  return (
    <div className={style.form__container}>
      <form className={style.forma} onSubmit={submit}>
        <label className={style.label} htmlFor="input__kid">
          <span className={style.label__text}>Имя ребенка</span>
          <input className={errors.kidName ? style.input__error : style.input} id="input__kid" {...register('kidName')} required placeholder="Введите имя ребёнка" />
          {/* <Error error={errors.kidName?.message} /> */}
          {errors.kidName && <p style={{ color: 'red' }}>{errors.kidName?.message}</p>}
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
          <input className={errors.phone ? style.input__error : style.input} id="input__phone" {...register('phone')} required placeholder="+7-000-000-00-00" />
          {/* <Error error={errors.phone?.message} /> */}
          {errors.phone && <p style={{ color: 'red' }}>{errors.phone?.message}</p>}
        </label>

        <label className={style.label} htmlFor="input__text">
          <span className={style.label__text}>Опыт</span>
          <input className={style.input} id="input__text" {...register('experience')} placeholder="Опишите опыт в шахматах" />
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
// function Error({ error }: any): any {
//   if (!error) return null;

//   return (
//     <div style={{ display: 'block' }}>
//       {error}
//     </div>
//   );
// }
