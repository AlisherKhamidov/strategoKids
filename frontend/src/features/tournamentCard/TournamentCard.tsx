import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardStyle from './Card.module.css';

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

export default function TournamentCard({
  photo, title, description, modal, link = '/schedule'
}:CardProps): JSX.Element {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const toggleHandler = (prev:boolean) => () => setToggle(!prev);

  return (
        toggle ? (
        <div
          className={cardStyle.card}
          style={{ backgroundImage: `url(${photo})`,
                  backgroundSize: 'contain',
                  // cover
                  backgroundRepeat: 'noRepeat', }}
        >
        <div className={cardStyle.title}>{title}</div>
        <button className={cardStyle.whiteBtn} type="button" onClick={modal ? toggleHandler(toggle) : () => navigate(link)}>Узнать</button>
        </div>
) : (
        <div className={cardStyle.cardBlue}>
        <div className={cardStyle.title}>{title}</div>
        <div className={cardStyle.text}>
          <p>{description}</p>
        </div>
        <button className={cardStyle.whiteBtn} type="button" onClick={toggleHandler(toggle)}>Узнать</button>
        </div>
      )
  );
}
