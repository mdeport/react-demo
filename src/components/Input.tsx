import { ChangeEventHandler, FC } from "react";

type Iprops = {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const Input: FC<Iprops> = (props) => {
  const { placeholder, onChange, value } = props;

  return (
    <input
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      value={value}
    />
  );
};

export { Input };
