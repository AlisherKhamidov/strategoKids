import React, { useState } from 'react';
import Group from './types/Group';


interface GroupPops {
  group: Group;
  handleRemove: (group: Group) => void;
  handleUpdate: (newGroup: Group) => void;
}


function GroupCard({ group, handleRemove, handleUpdate }: GroupPops): JSX.Element {

const [edit, setEdit] = useState(false);

  return (
    <div className="card">
      <div
        className="action-buttons"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button><i className="chess pawn icon"></i></button>
        <button className="ui icon button" onClick={() => handleRemove(group)}>
          <i className="trash icon"></i>
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
