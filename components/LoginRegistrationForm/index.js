import React from 'react'
import {connect} from 'react-redux'
import './login-registration-form.css'
import {Input} from '../_ui/input'

const LoginRegistrationForm = () => {
  return (
    <div className="login-registration-form">
      <img src="/img/logo.jpg" alt="" className="login-registration-form__logo" />
      <div className="login-registration-form__title">
        Вход
      </div>
    </div>
  );
};

export default LoginRegistrationForm;