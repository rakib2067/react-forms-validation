import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    reset: nameReset,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    reset: emailReset,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput((value) => value.includes("@"));

  const inputIsValid = nameIsValid && emailIsValid;

  let formIsValid = false;
  if (inputIsValid) {
    formIsValid = true;
  }

  const handleSumbission = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      return;
    }
    nameReset();
    emailReset();
  };
  const NameFormClassNames = nameHasError
    ? "form-control invalid"
    : "form-control";
  const EmailFormClassNames = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleSumbission}>
      <div className={NameFormClassNames}>
        <label htmlFor="name">Your Name</label>
        <input
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
        />
        {nameHasError && <p className="error-text">Input is invalid</p>}
      </div>
      <div className={EmailFormClassNames}>
        <label htmlFor="email">Your Email</label>
        <input
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailHasError && <p className="error-text">Input is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
