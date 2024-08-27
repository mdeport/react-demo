import { FC } from "react";

type Iprops = {
  text: string;
  onClick: () => void;
};
const Button: FC<Iprops> = (props) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{text}</button>;
};

export { Button };
