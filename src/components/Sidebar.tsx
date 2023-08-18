import React, { useState } from "react";
import CustomInput from "./CustomInput";
import SidebarItem from "./SidebarItem";
import store from "../store";
import { observer } from "mobx-react-lite";

const Sidebar = () => {
  const [inputValue, setInputValue] = useState("");

  const filterUsers = () => {
    return store.commonStore.users?.filter((x) =>
      x.name.toLocaleLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar__title">Поиск сотрудников</h2>
      <CustomInput
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h2 className="sidebar__title">Результаты</h2>
      {inputValue.length <= 0 ? (
        <p className="sidebar__help">Начните поиск</p>
      ) : inputValue.length > 0 && filterUsers()?.length! === 0 ? (
        <p className="sidebar__help">Ничего не найдено</p>
      ) : (
        <div>
          {filterUsers()?.map((item, index) => {
            return (
              <SidebarItem email={item.email} name={item.name} key={index} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default observer(Sidebar);
