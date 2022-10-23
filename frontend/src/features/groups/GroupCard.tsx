import React from 'react';
import Group from './types/Group';

interface GroupPops {
group: Group;
}

function GroupCard({ group }: GroupPops): JSX.Element {
  return (
    <div>
    <div>{group.title}</div>
    <img src={group.img} alt="" />
    </div>
  );
}

export default GroupCard;
