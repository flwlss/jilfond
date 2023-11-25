import React from "react";

interface ICustomInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props: ICustomInput) => {
  return (
    <input
      onChange={props.onChange}
      placeholder="Введите имя"
      type="text"
    />
  );
};

export default CustomInput;
