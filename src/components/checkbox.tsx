import { ChangeEventHandler, FC } from "react";

type Iprops = {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: FC<Iprops> = (props) => {
  const { checked, onChange } = props;

  return <input type="checkbox" onChange={onChange} checked={checked} />;
};

export { Checkbox };
