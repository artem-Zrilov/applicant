import './input.css'
import React, { useState } from 'react';
import cx from 'classnames'

export const Input = ({type, name, value, onChange, onBlur, error, disabled, className, placeholder}) => {



  return (
    <input
      className={cx(`input ${className}`, {
        'input-error': error,
        'input-disabled': disabled
      })}
      type={type}
      name={name}
      value={value}
      onChange={event => {onChange(name, event.target.value)}}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={placeholder}
    />
  )
}