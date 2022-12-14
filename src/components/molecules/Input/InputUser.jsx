/*
 * The input component using in authentication
 * file: InputUser.scss
 */
import React, { useState } from "react";
import { useField } from "formik";
import Label from "../../atoms/Label/Label";
import "./InputUser.scss";

const InputUser = ({ type = "text", label = "", icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label htmlFor={props.name}>
        <p className="input__label">{label}</p>
        <div className="input__container">
          <input
            className="input__user"
            type={type}
            {...field}
            {...props}
          ></input>
          {icon}
        </div>
        {meta.touched && meta.error ? (
          <p className="input__error">{meta.error}</p>
        ) : null}
      </Label>
    </>
  );
};

InputUser.propTypes = {};

export default InputUser;
