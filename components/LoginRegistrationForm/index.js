import React, {useState} from 'react'
import cx from 'classnames'
import './login-registration-form.css'
import {Input} from '../_ui/input'
import {Button} from "../_ui/button";

const LOGIN_FORM = 'login';
const REGISTRATION_FORM = 'registration';
const TEXT_REGISTRATION = 'Регистрация';
const TEXT_ENTER = "Вход";
const TEXT_CREATE_ACCOUNT = "Создать аккаунт";
const TEXT_BACK = "Назад";
const TEXT_END = "Завершить";
const TEXT_RESET_PASSWORD = "Забыли пароль?"

const linkText = {
  [LOGIN_FORM]:  TEXT_CREATE_ACCOUNT,
  [REGISTRATION_FORM]: TEXT_ENTER,
  'back': TEXT_BACK
}

const initialState = {
  title: TEXT_ENTER,
  currentForm: LOGIN_FORM,
  step: 0,
  login: {
    0: [
      {
        value: '',
        name: 'app_user_login',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Логин'
      },
      {
        value: '',
        name: 'app_user_password',
        type: 'password',
        fieldType: 'input',
        placeholder: 'Пароль'
      }
    ]
  },
  registration: {
    0: [
      {
        value: '',
        name: 'app_user_login',
        type: 'text',
        fieldType: 'input',
        placeholder: '123'
      },
      {
        value: '',
        name: 'app_user_password',
        type: 'password',
        fieldType: 'input',
        placeholder: 'Пароль'
      }
    ]

  }
};

const LoginRegistrationForm = () => {
  const [state, setState] = useState(initialState);
  const {
    title,
    currentForm,
    step
  } = state;

  const fields = state[currentForm][step];

  const switchForm = () => {
    if (currentForm === LOGIN_FORM) {
      setState(prevState => ({
        ...prevState,
        title: TEXT_REGISTRATION,
        currentForm: REGISTRATION_FORM
      }))
      return false;
    } else if (currentForm === REGISTRATION_FORM && step === 0) {
      setState(prevState => ({
        ...prevState,
        title: TEXT_ENTER,
        currentForm: LOGIN_FORM
      }))
      return false;
    }
  };

  return (
   <div className={cx("login-registration-form", {
     "login-registration-form--registration": currentForm === LOGIN_FORM
   })}>
     <img src="/img/logo.jpg" alt="" className="login-registration-form__logo"/>
     <div className="login-registration-form__title">
       {title}
     </div>
     {fields.map((item, key) => (
      <Input
       kwy={item.name}
       className={cx('login-registration-form__field', {
         'login-registration-form__field--margin--none': fields.length - 1 === key
       })}
       placeholder={item.placeholder}
       type={item.type}
       name={item.name}
      />
     ))}
     {currentForm === LOGIN_FORM && (
      <div className="login-registration-form__reset-password">
        {TEXT_RESET_PASSWORD}
      </div>
     )}
     <div className="login-registration-form__buttons">
       <div
        className="login-registration-form__link"
        onClick={switchForm}
       >
         {linkText[step === 0 ? currentForm : 'back']}
       </div>
       <Button
       >
         {TEXT_ENTER}
       </Button>
     </div>
     { currentForm === REGISTRATION_FORM && (
      <div className="login-registration-form__pagination">
        {Object.keys(state[currentForm]).map((item, key) => (
         <div key={key} className={cx("login-registration-form__pagination-item", {
           "login-registration-form__pagination-item--active": key === step
         })}/>
        ))}
      </div>
     )}
   </div>
  );
};

export default LoginRegistrationForm;