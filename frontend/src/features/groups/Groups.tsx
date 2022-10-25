import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loadGroups, createGroup, deleteGroup } from './groupsSlice';
import GroupCard from './GroupCard';
import Group from './types/Group';

function Groups(): JSX.Element {
  const groupsList = useSelector((state: RootState) => state.groups.groupsArr);
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [info, setInfo] = useState('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadGroups());
  }, [dispatch]);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    dispatch(createGroup({ title, img, info }));
  };

  const handleRemove = (groupToDelete: Group): void => {
    dispatch(deleteGroup(groupToDelete.id));
  };

  // const handleUpdate = (newGroup: Group): void => {
  //   dispatch(updateGroup(newGroup));
  // };

  return (
    <>
      <h1>Groups</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название группы"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="text"
          placeholder="Загрузить изображение"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <input
          type="text"
          placeholder="Указать описание"
          value={info}
          onChange={(event) => setInfo(event.target.value)}
        />
        <button type="submit">OK</button>
      </form>
      <h3>Группы формируются в зависимости от уже имеющегося опыта:</h3>
      <div className="ui cards">
        {groupsList.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            handleRemove={handleRemove}
            // handleUpdate={handleUpdate}
          />
        ))}
      </div>
      <div>
        <ul className="ui list">
          И в зависимости от возраста:
          <li>школьники</li>
          <li>дошкольники</li>
        </ul>
      </div>
      <div>Занятия проводятся один/два/три раза в неделю согласно расписанию</div>

    </>
  );
}

export default Groups;
