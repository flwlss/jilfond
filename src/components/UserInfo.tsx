import React, { useEffect, useState } from "react";
import store from "../store";
import { observer } from "mobx-react-lite";

const UserInfo = () => {
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    const user = store.commonStore.users?.find(
      (x) => x.id === store.commonStore.selectedUser
    );
    setSelectedUser(user);
  }, [store.commonStore.selectedUser]);

  return (
    <div className="userInfo">
      {store.commonStore.selectedUser !== 0 ? (
        <div className="userInfo__card">
          <div className="userInfo__card__photo">
            <img
              className="userInfo__card__photo__photo"
              src="/images/noImage.png"
              alt=""
            />
          </div>
          <div className="userInfo__card__info">
            <h2 style={{ marginBottom: 10 }} className="userInfo__card__title">
              {selectedUser?.name}
            </h2>
            <div>
              <span className="userInfo__card__subtitle">email:</span>
              <span className="userInfo__card__text">
                {selectedUser?.email}
              </span>
            </div>
            <div style={{ margin: "10px 0 20px 0" }}>
              <span className="userInfo__card__subtitle">phone:</span>
              <span className="userInfo__card__text">
                {selectedUser?.phone}
              </span>
            </div>
            <h2 style={{ marginBottom: 25 }} className="userInfo__card__title">
              О себе:
            </h2>
            <p className="userInfo__card__text">{selectedUser?.website}</p>
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
