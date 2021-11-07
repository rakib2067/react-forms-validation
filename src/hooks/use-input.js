import { useState, useReducer } from "react";

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { enteredValue: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { enteredValue: state.enteredValue, isTouched: true };
  }
  if (action.type === "RESET") {
    return { enteredValue: "", isTouched: false };
  }
  return { enteredValue: "", isTouched: false };
};
const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, {
    enteredValue: "",
    isTouched: false,
  });

  const valueIsValid = validateValue(inputState.enteredValue);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };
  const inputBlurHandler = (event) => {
    dispatchInput({ type: "BLUR" });
  };
  const reset = () => {
    dispatchInput({ type: "RESET" });
  };
  return {
    value: inputState.enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
