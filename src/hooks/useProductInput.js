import { useRef } from "react";

export const useProductInput = (addProducts) => {

  const inputRef = useRef(null);

  const inputInfo = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;
    addProducts(inputRef.current.value);
    inputRef.current.value = "";
  };

  return {inputRef, inputInfo}
};
