import { useState } from "react";
import useValidate from "../hooks/use-validate";

const BasicForm = (props) => {
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    reset: nameReset,
  } = useValidate((value) => value.trim !== "");
  const {
    value: lName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueBlurHandler: lNameBlurHandler,
    valueChangeHandler: lNameChangeHandler,
    reset: lNameReset,
  } = useValidate((value) => value.trim !== "");
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useValidate((value) => value.includes("@"));

  let formIsValid = false;
  const inputIsValid = nameIsValid && emailIsValid && lNameIsValid;
  if (inputIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    nameReset();
    lNameReset();
    emailReset();
  };

  const nameFormClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const lNameFormClasses = lNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailFormClasses = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={nameFormClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
          />
          {nameHasError && <p className="error-text">Invalid Name</p>}
        </div>
        <div className={lNameFormClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lName}
            onBlur={lNameBlurHandler}
            onChange={lNameChangeHandler}
            type="text"
            id="name"
          />
          {lNameHasError && <p className="error-text">Invalid Last Name</p>}
        </div>
      </div>
      <div className={emailFormClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="text"
          id="name"
        />
        {emailHasError && <p className="error-text">Invalid E-Mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
