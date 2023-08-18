import React from "react";

interface ISideItemProps {
  name: string;
  email: string;
}

const SidebarItem = (props: ISideItemProps) => {
  return (
    <div className="sidebar__item">
      <div className="sidebar__item__photo"></div>
      <div className="sidebar__item__info">
        <p className="sidebar__item__info__name">{props.name}</p>
        <p className="sidebar__item__info__email">{props.email}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
