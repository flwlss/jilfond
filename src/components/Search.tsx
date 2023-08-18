import React from "react";
import Container from "./Container";
import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";

const Search = () => {
  return (
    <Container>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar />
        <UserInfo />
      </div>
    </Container>
  );
};

export default Search;
