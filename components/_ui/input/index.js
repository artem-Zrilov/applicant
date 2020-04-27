import React from 'react';
import cx from 'classnames'

export const Input = ({type, name, value, onChange, onBlur, error, disabled, className}) => {

  return (
    <input
      className={cx(`input ${className}`, {
        'input-error': error,
        'input-disabled': disabled
      })}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
  )
}