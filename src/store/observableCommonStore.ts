/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import { makeAutoObservable, runInAction } from "mobx";
import React from "react";
import {
  getUsersByIdRequest,
  getUsersRequest,
} from "./requests.ts/commonStoreRequest";

class ObservableCommonStore {
  users: User[] | null = null;
  selectedUser: User | null = null;

  constructor() {
    console.log("ObservableCommonStore constructor");
    makeAutoObservable(this);
  }

  async getUsers() {
    try {
      const data = await getUsersRequest();
      if (data) {
        console.log("data result", data);
        runInAction(() => {
          this.users = data;
        });
        return data;
      }
      return undefined;
    } catch (e) {
      console.log(e);
    }
  }

  async getUserById(id: number) {
    try {
      const data = await getUsersByIdRequest(id);
      if (data) {
        console.log("user data result", data);
        runInAction(() => {
          this.selectedUser = data;
        });
        return data;
      }
      return undefined;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ObservableCommonStore;
