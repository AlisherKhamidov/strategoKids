import React from 'react';
import Event from './types/Event';
import style from './EventCard.module.css';

interface EventPops {
event: Event;
handleRemove: (event: Event) => void;
// handleUpdate:(event: Event) => void;
}

function EventCard({ event, handleRemove,
  // handleUpdate
}
  : EventPops
  ): JSX.Element {
  // const [edit, setEdit] = useState(false);
  return (
    <div className={style.card}>
      <div className={style.titleBox}>
        <div className="content">{event.title}</div>
      </div>
     <div
       className="btn"
     >
        <button type="button" className={style.buttonDelete} onClick={() => handleRemove(event)}>
          <span className='deleteText'>Удалить мероприятие</span>
        </button>
    <div>{event.description}</div>
     </div>
      <img className={style.image} src={event.photo} alt="some event" />
      <div />

    </div>
  );
}

export default EventCard;
