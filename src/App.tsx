import React, { useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import store from "./store";

function App() {
  useEffect(() => {
    store.commonStore.getUsers();
  }, []);

  return (
    <>
      <Header />
      <Search />
    </>
  );
}

export default App;
