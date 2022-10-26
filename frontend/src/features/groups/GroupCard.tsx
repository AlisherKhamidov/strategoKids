import React, { ChangeEvent, FormEvent, useState } from "react";
import User from "../auth/types/User";
import Group from "./types/Group";
import CardStyle from "./GroupCard.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface GroupPops {
  group: Group;
  handleRemove: (group: Group) => void;
  handleUpdate: (newGroup: Group) => void;
  // isAdmin: User;
}

function GroupCard({
  group,
  handleRemove,
  handleUpdate,
}: // isAdmin,
GroupPops): JSX.Element {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(group.title);
  const [img, setImg] = useState(group.img);
  const [info, setInfo] = useState(group.info);
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  const toggleHandler = (prev: boolean) => () => setToggle(!prev);
  const user = useSelector((state: RootState) => state.auth.user);

  const togleEdit = (): void => {
    if (edit) {
      handleUpdate({ ...group, title, img, info });
    }
    setEdit((x) => !x);
  };

  const titleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const imgChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setImg(event.target.value);
  };

  const infoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInfo(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    togleEdit();
  };

  return (
    <div className={CardStyle.card}>
      {user?.isAdmin && (
        <div>
          <button
            className={CardStyle.actionButton1}
            type="button"
            onClick={togleEdit}
          >
            изменить
          </button>
          <button
            className={CardStyle.actionButton2}
            type="button"
            onClick={() => handleRemove(group)}
          >
            удалить
          </button>
        </div>
      )}
      <div className={CardStyle.title}>{group.title}</div>
      {edit && (
        <>
          <form className={CardStyle.form} onSubmit={handleSubmit}>
            <label className={CardStyle.label}>
              Название группы
              <input
                type="text"
                value={title}
                // defaultValue={group.title}
                onChange={titleChange}
              />
            </label>
            <label className={CardStyle.label}>
              Ссылка на изображение
              <input
                type="text"
                value={img}
                // defaultValue={group.title}
                onChange={imgChange}
              />
            </label>
            <label className={CardStyle.label}>
              Описание группы
              <input
                type="text"
                value={info}
                // defaultValue={group.title}
                onChange={infoChange}
              />
            </label>
            <button type="submit" style={{ display: "none" }}>
              +
            </button>
          </form>
        </>
      )}
      <button
        className={CardStyle.whiteButton}
        type="button"
        onClick={toggleHandler(toggle)}
      >
        {toggle ? "О группе" : "Назад"}
      </button>
      {toggle ? (
        <img className={CardStyle.image} src={group.img} alt="" />
      ) : (
        <div className={CardStyle.cardBlue}>
          <p>{group.info}</p>
        </div>
      )}
    </div>
  );
}

export default GroupCard;
