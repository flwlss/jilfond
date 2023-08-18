/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import { makeAutoObservable } from "mobx";
import React from "react";
import { getUsersRequest } from "./requests.ts/commonStoreRequest";

class ObservableCommonStore {
  users: User[] | null = null;

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
}

export default ObservableCommonStore;
