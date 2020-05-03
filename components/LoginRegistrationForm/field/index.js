import React from 'react';
import cx from "classnames";
import {Input} from "../../_ui/input";

export const Field = ({placeholder, type, name, error, onChange, value, fieldsLength, index}) => {

  return (
   <Input
    className={cx('login-registration-form__field', {
      'login-registration-form__field--margin--none': fieldsLength === index
    })}
    placeholder={placeholder}
    type={type}
    name={name}
    error={error}
    onChange={onChange}
    value={value}
   />
  )
}