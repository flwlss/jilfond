/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import { makeAutoObservable, runInAction } from "mobx";
import React from "react";
import { getUsersRequest } from "./requests.ts/commonStoreRequest";

class ObservableCommonStore {
  users: User[] | null = null;
  selectedUser: number = 0;

  constructor() {
    console.log("ObservableCommonStore constructor");
    makeAutoObservable(this);
  }

  async getUsers() {
    try {
      const data = await getUsersRequest();
      if (data) {
        console.log("data result", data);
        this.users = data;
        return data;
      }
      return undefined;
    } catch (e) {
      console.log(e);
    }
  }

  selectUser(id: number) {
    runInAction(() => {
      this.selectedUser = id;
    });
  }
}

export default ObservableCommonStore;
