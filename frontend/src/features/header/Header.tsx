import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { logout } from '../auth/authSlice';
import headerStyle from './Header.module.css';

export default function Header(): JSX.Element {
  const user = useSelector((globalState: RootState) => globalState.auth.user);
  // console.log(user)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = React.useCallback(
    async (event: React.MouseEvent) => {
        event.preventDefault();
        const dispatchResult = await dispatch(
            logout()
        );
        if (logout.fulfilled.match(dispatchResult)) {
            navigate('/');
        }
        if (logout.rejected.match(dispatchResult)) {
          // eslint-disable-next-line no-console
          console.error(dispatchResult.error.message);
        }
    },
    [dispatch, navigate]);
  return (
    <nav className={headerStyle.container}>
      {!user ? (
        <div>
          <Link className={headerStyle.link} to="/">Главная</Link>{' '}
          <Link className={headerStyle.link} to="/schedule">Расписание</Link>{' '}
          <Link className={headerStyle.link} to="/application">Подача заявки</Link>{' '}
          <Link className={headerStyle.link} to="/events">События</Link>
          <Link className={headerStyle.link} to="/groups">Группы</Link>
          <Link className={headerStyle.link} to="/login">Войти</Link>
          <Link className={headerStyle.link} to="/registration">Зарегистрироваться</Link>
        </div>
      ) : (user && !user.isAdmin) ? (
        <div>
          <Link className={headerStyle.link} to="/">Главная</Link>{' '}
          <Link className={headerStyle.link} to="/schedule">Расписание</Link>{' '}
          <Link className={headerStyle.link} to="/application">Подача заявки</Link>{' '}
          <Link className={headerStyle.link} to="/events">События</Link>
          <Link className={headerStyle.link} to="/groups">Группы</Link>
          {!user?.isAdmin && <Link className={headerStyle.link} to="/parents">Кабинет родителя</Link>}
          <Link className={headerStyle.link} to="/" onClick={handleLogout}>Выйти</Link>
        </div>
        ) : (
        <div>
        <Link className={headerStyle.link} to="/">Главная</Link>{' '}
        <Link className={headerStyle.link} to="/schedule">Расписание</Link>{' '}
        <Link className={headerStyle.link} to="/events">События</Link>
        <Link className={headerStyle.link} to="/groups">Группы</Link>
        <Link className={headerStyle.link} to="/admin">Кабинет админа</Link>
        <Link className={headerStyle.link} to="/" onClick={handleLogout}>Выйти</Link>
        </div>
          )}
    </nav>
  );
}
