import React from 'react';
import Event from './types/Event';

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
    <div className="card">
     <div
       className="btn"
       style={{ display: 'flex', justifyContent: 'flex-end' }}
     >
        <button type="button" className="ui icon button" onClick={() => handleRemove(event)}>
          <i className="trash icon" />
        </button>
     </div>
      <div className="content">{event.title}</div>
      <img className="ui medium rounded image" src={event.photo} alt="some event" />
      <div />
    <div>{event.description}</div>

    </div>
  );
}

export default EventCard;
