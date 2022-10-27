import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { logout } from '../auth/authSlice';
import headerStyle from './Header.module.css';

export default function Header(): JSX.Element {
  const user = useSelector((globalState: RootState) => globalState.auth.user);

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

    const activeHandler = ({ isActive }:{ isActive:boolean }):string => isActive
    ? headerStyle.linkActive : headerStyle.link;

  return (
    <nav className={headerStyle.container}>
      {!user ? (
        <nav>
          <NavLink className={activeHandler} to="/about"> О создателе </NavLink>{' '}
          <NavLink className={activeHandler} to="/" end> Главная </NavLink>{' '}
          <NavLink className={activeHandler} to="/schedule">Расписание </NavLink>{' '}
          <NavLink className={activeHandler} to="/application"> Подача заявки </NavLink>{' '}
          <NavLink className={activeHandler} to="/events">События</NavLink>{' '}
          <NavLink className={activeHandler} to="/groups">Группы</NavLink>{' '}
          <NavLink className={activeHandler} to="/login">Войти</NavLink>{' '}
          <NavLink className={activeHandler} to="/registration">Зарегистрироваться</NavLink>{' '}
        </nav>
      ) : (
        <nav>
          <NavLink className={activeHandler} to="/about"> О создателе </NavLink>{' '}
          <NavLink className={activeHandler} to="/" end> Главная </NavLink>{' '}
          <NavLink className={activeHandler} to="/schedule">Расписание </NavLink>{' '}
          <NavLink className={activeHandler} to="/application"> Подача заявки </NavLink>{' '}
          <NavLink className={activeHandler} to="/events">События</NavLink>{' '}
          <NavLink className={activeHandler} to="/groups">Группы</NavLink>{' '}
          {user?.isAdmin &&
          <NavLink className={activeHandler} to="/parents">Кабинет родителя</NavLink>}
          <Link className={headerStyle.link} to="/" onClick={handleLogout}>Выйти</Link>
        </nav>
      )}
    </nav>
  );
}
