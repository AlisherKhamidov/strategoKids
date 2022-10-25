import React, { ChangeEvent, FormEvent, useState } from "react";
import User from "../auth/types/User";
import Group from "./types/Group";

interface GroupPops {
  group: Group;
  handleRemove: (group: Group) => void;
  handleUpdate: (newGroup: Group) => void;
  user: User;
}

function GroupCard({
  group,
  handleRemove,
  handleUpdate,
  user,
}: 
GroupPops): JSX.Element {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(group.title);
  const [img, setImg] = useState(group.img);
  const [info, setInfo] = useState(group.info);

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
    <>
      {/* {edit && (
        <form>
          <input type="text" />
        </form>
      )} */}
      <div className="card">
          {user.isAdmin && 
        <div
          className="action-buttons"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <button type="button" onClick={togleEdit}>
            <i className="chess pawn icon" />
          </button>
          <button
            type="button"
            className="ui icon button"
            onClick={() => handleRemove(group)}
          >
            <i className="trash icon" />
          </button>
          </div>}
        <div className="content">{group.title}</div>
        {edit && (
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
            <label>Название группы
              <input
                type="text"
                value={title}
                // defaultValue={group.title}
                onChange={titleChange}
              />
            </label>
            <label>Ссылка на изображение<input
              type="text"
              value={img}
              // defaultValue={group.title}
              onChange={imgChange}
            /></label>
            <label>Описание группы<input
              type="text"
              value={info}
              // defaultValue={group.title}
              onChange={infoChange}
            /></label>
            <button type="submit" style={{ display: "none" }}>
              +
            </button>
          </form>
        )}

        <img className="ui medium rounded image" src={group.img} alt="" />
        <div>
          <p>{group.info}</p>
        </div>
      </div>
    </>
  );
}

export default GroupCard;
