/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import { selectLoginFormError } from './selectors';
import style from '../applications/Application.module.css';
import style2 from './Auth.module.css';
import closed from './images/closed_eye.png';
import open from './images/open_eye.png';
import { login, resetLoginFormError } from './authSlice';
import User from './types/User';

function Login(): JSX.Element {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const error = useSelector(selectLoginFormError);
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [first, setFirst] = React.useState(false);

    // console.log(phone);

    const toggleFirst = (): void => {
      setFirst((prev) => !prev);
    };

    const handleSubmit = React.useCallback(
      async (event: React.FormEvent) => {
        event.preventDefault();
        const dispatchResult = await dispatch(
          login({
            phone,
            password,
          })
          );
          if (login.fulfilled.match(dispatchResult)) {
              const user = dispatchResult.payload as User;
              if (user.isAdmin === true) {
                navigate('/admin');
              }
                navigate('/');
            }
            if (login.rejected.match(dispatchResult)) {
              console.error(dispatchResult.error.message);
            }
        },
        [dispatch, navigate, phone, password]);

        const handlePhoneChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPhone(event.target.value);
          dispatch(resetLoginFormError());
        },
        [dispatch]
      );
      const handlePasswordChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          setPassword(event.target.value);
          dispatch(resetLoginFormError());
        },
        [dispatch]
      );
    return (
      <div className={style.form__container}>
          <form className={style.forma} onSubmit={handleSubmit}>
          <label className={style.label} htmlFor="phone">
          <span className={style.label__text}>Телефон</span>
          <input
            className={style.input}
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
            placeholder="+7-000-000-00-00"
          />
          </label>

          <label className={style.label} htmlFor="pass">
          <span className={style.label__text}>Пароль</span>
          <input className={error ? style.input__error : style.input} id="pass" type={first ? 'text' : 'password'} value={password} onChange={handlePasswordChange} required placeholder="Введите пароль" />
            <img onClick={() => toggleFirst()} className={style2.closed} src={first ? open : closed} alt="eye" />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </label>

          <div className={style.btnPosition}>
            <button className={style.button} type="submit">
            Войти
            </button>
          </div>
          </form>
      </div>
    );
}

export default Login;
