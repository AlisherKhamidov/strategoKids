/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { register, resetRegisterFormError } from './authSlice';
import style from '../applications/Application.module.css';
import style2 from './Auth.module.css';
import closed from './images/closed_eye.png';
import open from './images/open_eye.png';
import { selectRegisterFormError } from './selectors';

function Registration(): JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const error = useSelector(selectRegisterFormError);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordRepeat, setPasswordRepeat] = React.useState('');
    const [first, setFirst] = React.useState(false);
    const [second, setSecond] = React.useState(false);

  const toggleFirst = (): void => {
    setFirst((prev) => !prev);
  };
  const toggleSecond = (): void => {
    setSecond((prev) => !prev);
  };

    const handleSubmit = React.useCallback(
        async (event: React.FormEvent) => {
          event.preventDefault();

          const dispatchResult = await dispatch(
            register({
              name,
              email,
              phone,
              password,
              passwordRepeat,
            })
          );

          if (register.fulfilled.match(dispatchResult)) {
            navigate('/');
          }
        },
        [dispatch, navigate, name, email, phone, password, passwordRepeat]
      );

      const handleNameChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handleEmailChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handlePhoneChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handlePasswordChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );
      const handlePasswordRepeatChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPasswordRepeat(event.target.value);
          dispatch(resetRegisterFormError());
        },
        [dispatch]
      );

  return (
    <div className={style.form__container}>
      <form className={style.forma} onSubmit={handleSubmit}>
      {/* {error && (
        <div className="" style={{ display: 'block' }}>
          {error}
        </div>
      )} */}
        <label className={style.label} htmlFor="name">
          <span className={style.label__text}>Ваше имя</span>
          <input className={error === 'Введите полное имя, пожалуйста' ? style.input__error : style.input} id="name" value={name} onChange={handleNameChange} required placeholder="Введите ваше имя" />
          {error === 'Введите полное имя, пожалуйста' && <p style={{ color: 'red' }}>{error}</p>}
        </label>
        <label className={style.label} htmlFor="Email">
          <span className={style.label__text}>Email</span>
          <input className={style.input} id="Email" value={email} type="email" onChange={handleEmailChange} required placeholder="Введите ваш Email" />
        </label>
        <label className={style.label} htmlFor="phone">
          <span className={style.label__text}>Телефон</span>
          <input className={error === 'Введите корректный номер, пожалуйста' ? style.input__error : style.input} id="phone" value={phone} onChange={handlePhoneChange} required placeholder="+7-000-000-00-00" />
          {error === 'Введите корректный номер, пожалуйста' && <p style={{ color: 'red' }}>{error}</p>}
        </label>
        <label className={style.label} htmlFor="pass">
          <span className={style.label__text}>Пароль</span>
          <input className={error === 'Пароли не совпадают' ? style.input__error : style.input} id="pass" type={first ? 'text' : 'password'} value={password} onChange={handlePasswordChange} required placeholder="Придумайте пароль" />
          <img onClick={() => toggleFirst()} className={style2.closed} src={first ? open : closed} alt="eye" />
        </label>
        <label className={style.label} htmlFor="repPass">
          <span className={style.label__text}>Подтвердите пароль</span>
          <input className={error === 'Пароли не совпадают' ? style.input__error : style.input} id="repPass" type={second ? 'text' : 'password'} value={passwordRepeat} onChange={handlePasswordRepeatChange} required placeholder="Пароль" />
          <img onClick={() => toggleSecond()} className={style2.closed} src={second ? open : closed} alt="eye" />
          {error === 'Пароли не совпадают' && <p style={{ color: 'red' }}>{error}</p>}
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

export default Registration;
