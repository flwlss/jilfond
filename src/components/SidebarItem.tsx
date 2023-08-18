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
        store.commonStore.selectUser(props.id);
      }}
      className="sidebar__item"
    >
      <div className="sidebar__item__photo"></div>
      <div className="sidebar__item__info">
        <p className="sidebar__item__name">{props.name}</p>
        <p className="sidebar__item__email">{props.email}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
