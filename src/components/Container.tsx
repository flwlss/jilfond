import React from "react";

const Container = ({ children }: { children: JSX.Element }) => {
  return <div className="container">{children}</div>;
};

export default Container;
