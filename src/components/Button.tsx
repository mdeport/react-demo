import { FC } from "react";

type Iprops = {
  text: string;
  onClick: () => void;
};
const Button: FC<Iprops> = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
};

const ButtonRemove: FC<Iprops> = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
}

const ButtonEdit: FC<Iprops> = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
}

export { Button , ButtonRemove, ButtonEdit};
