import React from 'react';
import Group from './types/Group';

interface GroupPops {
  group: Group;
  handleRemove: (group: Group) => void;
}

function GroupCard({ group, handleRemove }: GroupPops): JSX.Element {
  return (
    <div className="card">
      <div
        className="btn"
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <button type="button" className="ui icon button" onClick={() => handleRemove(group)}>
          <i className="trash icon" />
        </button>
      </div>
      <div className="content">{group.title}</div>
      <img className="ui medium rounded image" src={group.img} />
      <div>
        <p>{group.info}</p>
      </div>
    </div>
  );
}

export default GroupCard;
