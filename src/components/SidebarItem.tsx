import React from "react";
import store from "../store";

interface ISideItemProps {
  name: string;
  id: number;
  email: string;
}

const SidebarItem = (props: ISideItemProps) => {
  return (
    <div
      onClick={() => {
        store.commonStore.getUserById(props.id);
      }}
      className="sidebar__item"
    >
      <div className="sidebar__item__photo">
        <img src="/images/noImage.png" alt="" />
      </div>
      <div className="sidebar__item__info">
        <h3>{props.name}</h3>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
