import { Link } from 'react-router-dom';
import headerStyle from './Header.module.css';

export default function Header(): JSX.Element {
  return (
    <nav className={headerStyle.container}>
      <Link className={headerStyle.link} to="/main">Главная</Link>{' '}
      <Link className={headerStyle.link} to="/schedule">Расписание</Link>{' '}
      <Link className={headerStyle.link} to="/application">Подача заявки</Link>{' '}
      <Link className={headerStyle.link} to="/events">События</Link>
      <Link className={headerStyle.link} to="/groups">Группы</Link>
      <Link className={headerStyle.link} to="/login">Войти</Link>
      <Link className={headerStyle.link} to="/registration">Зарегистрироваться</Link>
    </nav>
  );
}
