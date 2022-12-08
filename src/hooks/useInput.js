import { useState } from "react";

// 커스텀 훅 -- 결국 함수
export const useInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const onChangeHandler = (value) => {
    setValue(value);
  };

  return [value, onChangeHandler, setValue];
};
