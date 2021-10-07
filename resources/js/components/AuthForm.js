import React, { useState, useEffect } from "react";

import user_table from "../users.json";

export default function AuthForm({}) {
  let formDefaultValues = {
    login: "",
    password: "",
  };
  let formDefaultErros = {
    login: [],
    password: [],
  };

  const [formValues, setFormValues] = useState(formDefaultValues);
  //getter
  const { login, password } = formValues;

  //destructure values from default values

  const [formErrors, setFormErrors] = useState(formDefaultErros);

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  //takes a function and a state that is going to watch
  //when state changes, it calls functions

  useEffect(() => {
    console.dir("ComponentdidMount");
  }, []);

  const handleClick = (target) => {
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleErrorsIfValid = (target, errors) => {
    setFormErrors((prevState) => ({
      ...prevState,
      [target.name]: errors.filter((error) => error !== result.message),
    }));
  };
  const handleErrorsIfNotValid = (target, errors) => {
    setFormErrors((prevState) => ({
      ...prevState,
      [target.name]: [...errors, result.message],
    }));
  };
  function handleChange(e, validators) {
    let target = e.target;
    handleClick(target);
    handleValidations(target, validators);
  }
  //validators are functions inside array

  function handleValidations(target, validators) {
    validators.forEach((validation) => {
      const result = validation(target.value); // login value
      const errors = formErrors[target.name]; //login
      if (result.valid) {
        if (errors.includes(errors.message)) {
          // setFormErrors((prevState) => ({
          //   ...prevState,
          //   [target.name]: errors.filter((error) => error !== result.message)
          // }));
          handleErrorsIfValid(target, errors);
        } else {
          if (!errors.includes(errors.message)) {
            // setFormErrors((prevState) => ({
            //   ...prevState,
            //   [target.name]: [...errors, result.message]
            // }));
            handleErrorsIfNotValid(target, errors);
          }
        }
      }
    });
  }

  function noBlanks(value) {
    return {
      // valid: value.replace(/\s+/, "").length > 0,
      valid: value.replace(/\s+/, "").length > 0,
      message: "can not be blank",
    };
  }
  function validEmail(value) {
    return {
      // valid: value.replace(/\s+/, "").length > 0,
      valid: value.split("@").length > 1,
      message: "must be a valid email",
    };
  }
  //in closure
  //value ={}- value that goes through handleChange

  return (
    <div>
      <form>
        <div>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            name={"login"}
            id="login"
            onChange={(e) => handleChange(e, [noBlanks, validEmail])}
          />
        </div>
        <div className="">{formErrors["login"][0]}</div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name={"password"}
            id="password"
            onChange={(e) => handleChange(e, [noBlanks])}
          />
        </div>
        <div>
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
}
//otherwise it's called as soon as we render the page
//array function delays until smb actually changes the field
