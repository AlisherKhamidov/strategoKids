import React, { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import {
  loadGroups,
  createGroup,
  deleteGroup,
  updateGroup,
} from './groupsSlice';
import GroupCard from './GroupCard';
import Group from './types/Group';
import groupsStyle from './Groups.module.css';

function Groups(): JSX.Element {
  const groupsList = useSelector((state: RootState) => state.groups.groupsArr);
  const user = useSelector((state: RootState) => state.auth.user);
  // console.log(isAdmin);

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
    setTitle('');
    setImg('');
    setInfo('');
  };

  const handleRemove = (groupToDelete: Group): void => {
    dispatch(deleteGroup(groupToDelete.id));
  };

  const handleUpdate = (newGroup: Group): void => {
    dispatch(updateGroup(newGroup));
  };

  return (

    <div className={groupsStyle.container}>
      {user?.isAdmin && (
        <div className={groupsStyle.containerForm}>
          <form onSubmit={handleSubmit} className={groupsStyle.inputForm}>
            <input
              className={groupsStyle.input}
              type="text"
              placeholder="Название группы"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />

            <input
              className={groupsStyle.input}
              type="text"
              placeholder="Введите описание"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
            <input
              className={groupsStyle.input}
              type="text"
              placeholder="Ссылка на фото"
              value={info}
              onChange={(event) => setInfo(event.target.value)}
            />
            <button type="submit" className={groupsStyle.inputButton}>
              Создать новую группу
            </button>
          </form>
        </div>
      )}
        {groupsList.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
          />
        )).reverse()}
    </div>
  );
}

export default Groups;
