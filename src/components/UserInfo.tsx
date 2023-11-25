import React, { useEffect, useState } from "react";
import store from "../store";
import { observer } from "mobx-react-lite";

const UserInfo = () => {
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    if (store.commonStore.selectedUser) {
      setSelectedUser(store.commonStore.selectedUser);
    }
  }, [store.commonStore.selectedUser]);

  return (
    <div className="userInfo">
      {store.commonStore.selectedUser ? (
        <div className="userInfo__card">
          <div className="userInfo__card__photo">
            <img src="/images/noImage.png" alt="noImage" />
          </div>
          <div className="userInfo__card__info">
            <h2 style={{ marginBottom: 10 }}>{selectedUser?.name}</h2>
            <div>
              <span>email:</span>
              <p>{selectedUser?.email}</p>
            </div>
            <div style={{ margin: "10px 0 20px 0" }}>
              <span>phone:</span>
              <p>{selectedUser?.phone}</p>
            </div>
            <h2 style={{ marginBottom: 25 }}>О себе:</h2>
            <p>{selectedUser?.website}</p>
          </div>
        </div>
      ) : (
        <p className="userInfo__help">
          Выберите сотрудника, чтобы посмотреть его профиль
        </p>
      )}
    </div>
  );
};

export default observer(UserInfo);
