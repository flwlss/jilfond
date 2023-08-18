import React from "react";
import CustomInput from "./CustomInput";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Поиск сотрудников</h2>
      <CustomInput />
      <h2 className="sidebar__title">Результаты</h2>
      <p className="sidebar__help">Начните поиск</p>
    </div>
  );
};

export default Sidebar;
