import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadGroups } from './groupsSlice';
import GroupCard from './GroupCard';

function Groups(): JSX.Element {
  const groupsList = useSelector((state: RootState) => state.groups.groupsArr);
  console.log(groupsList);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadGroups());
  }, [dispatch]);
  return (
    <>
      <h1>Groups</h1>
      { groupsList.map((group) => <GroupCard key={group.id} group={group} />) }
    </>
  );
}

export default Groups;
