import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <nav>
      <Link to="/main">Главная</Link>{' '}
      <Link to="/application">Подача заявки</Link>{' '}
      <Link to="/events">События</Link>
    </nav>
  );
}
