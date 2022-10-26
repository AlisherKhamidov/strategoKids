import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardStyle from './TourCard.module.css';

interface CardProps {
  // kid:Kid;
  photo:string;
  title:string;
  description?:string;
  modal?:boolean;
  link?:string;
}

TournamentCard.defaultProps = {
  description: '',
  modal: true,
  link: '/schedule',
};

export default function TournamentCard({ photo, title, description = '', modal = true, link = '/schedule' }:CardProps): JSX.Element {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const toggleHandler = (prev:boolean) => () => setToggle(!prev);

  return (
        toggle ? (
      <div className={cardStyle.card}>
        <div className={cardStyle.title}>{title}</div>
        <img src={photo} className={cardStyle.image} alt="" />
        <button className={cardStyle.whiteBtn} type="button" onClick={modal ? toggleHandler(toggle) : () => navigate(link)}>Узнать</button>
      </div>
) : (
      <div className={cardStyle.cardBlue}>
        <div className={cardStyle.title}>{title}</div>
        <div className={cardStyle.text}>{description} </div>
        <button className={cardStyle.whiteBtn} type="button" onClick={toggleHandler(toggle)}>Назад</button>
      </div>
      )
  );
}
