import React from "react";

interface IContainerProps {
  children: JSX.Element;
}

const Container = (props: IContainerProps) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
