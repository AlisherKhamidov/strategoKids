import React, { FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import {
  loadGroups,
  createGroup,
  deleteGroup,
  updateGroup,
} from "./groupsSlice";
import GroupCard from "./GroupCard";
import Group from "./types/Group";
import groupsStyle from "./Groups.module.css";
import Footer from "../footer/Footer";

function Groups(): JSX.Element {
  const groupsList = useSelector((state: RootState) => state.groups.groupsArr);
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [info, setInfo] = useState("");

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

  const handleUpdate = (newGroup: Group): void => {
    dispatch(updateGroup(newGroup));
  };

  return (
    <>
      <h1>Наши группы</h1>
      {user?.isAdmin && (
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
      )}
      <h3>Группы формируются в зависимости от уже имеющегося опыта:</h3>
      <div className={groupsStyle.container}>
        {groupsList.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            handleRemove={handleRemove}
            handleUpdate={handleUpdate}
            // isAdmin={isAdmin}
          />
        ))}
      </div>
      <div>
        <h4>И в зависимости от возраста: {''} школьники, {''} дошкольники</h4>
      </div>
      <div>
        Занятия проводятся один/два/три раза в неделю согласно расписанию
      </div>
    </>
  );
}

export default Groups;
