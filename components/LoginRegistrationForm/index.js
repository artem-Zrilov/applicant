import React, {useState} from 'react'
import cx from 'classnames'
import './login-registration-form.css'
import {Input} from '../_ui/input'
import {Button} from "../_ui/button";
import {Field} from "./field";

const LOGIN_FORM = 'login';
const REGISTRATION_FORM = 'registration';
const TEXT_REGISTRATION = 'Регистрация';
const TEXT_ENTER = "Вход";
const TEXT_CREATE_ACCOUNT = "Создать аккаунт";
const TEXT_BACK = "Назад";
const TEXT_END = "Завершить";
const TEXT_NEXT = "Дальше";
const TEXT_RESET_PASSWORD = "Забыли пароль?";

const linkText = {
  [LOGIN_FORM]: TEXT_CREATE_ACCOUNT,
  [REGISTRATION_FORM]: TEXT_ENTER,
  'back': TEXT_BACK
}

const initialState = {
  title: TEXT_ENTER,
  currentForm: LOGIN_FORM,
  step: 0,
  login: {
    app_user_login: {
      value: '',
      name: 'app_user_login',
      type: 'text',
      fieldType: 'input',
      placeholder: 'Логин',
      error: false,
    },
    app_user_password: {
      value: '',
      name: 'app_user_password',
      type: 'password',
      fieldType: 'input',
      placeholder: 'Пароль',
      error: false,
    }
  },
  registration: {
    app_new_user_name: {
      value: '',
      name: 'app_new_user_name',
      type: 'text',
      fieldType: 'input',
      placeholder: 'Имя',
      error: false,
      step: 0
    },
    app_new_user_surname: {
      value: '',
      name: 'app_new_user_surname',
      type: 'text',
      fieldType: 'input',
      placeholder: 'Фамилия',
      error: false,
      step: 0
    },
    app_new_user_patronymic: {
      value: '',
      name: 'app_new_user_patronymic',
      type: 'text',
      fieldType: 'input',
      placeholder: 'Отчество',
      error: false,
      step: 0
    },
    app_new_user_login: {
      value: '',
      name: 'app_new_user_login',
      type: 'text',
      fieldType: 'input',
      placeholder: 'Логин',
      error: false,
      step: 1
    },
    app_new_user_password: {
      value: '',
      name: 'app_new_user_password',
      type: 'password',
      fieldType: 'input',
      placeholder: 'Пароль',
      error: false,
      step: 1
    },
    app_new_user_phone: {
      value: '',
      name: 'app_new_user_phone',
      type: 'tel',
      fieldType: 'input',
      placeholder: 'Телефон',
      error: false,
      step: 1
    },
    app_new_user_language: {
      value: '',
      name: 'app_new_user_language',
      type: 'text',
      fieldType: 'select',
      placeholder: 'Иностранный язык',
      error: false,
      step: 2
    },
    app_new_user_hostel: {
      value: '',
      name: 'app_new_user_hostel',
      type: 'text',
      fieldType: 'checkbox',
      label: 'Общежитие',
      error: false,
      step: 2
    }
  },
  get maxSteps () {
    let max = 0;
    Object.values(this.registration).forEach(item => {
      if (item.step > max) {
        max = item.step;
      }
    })
    return max + 1;
  }
};

const LoginRegistrationForm = () => {
  const [state, setState] = useState(initialState);

  const {
    title,
    currentForm,
    step,
    maxSteps
  } = state;

  const fields = currentForm === REGISTRATION_FORM ?
   Object.values(state[currentForm]).filter(item => item.step === step) :
   Object.values(state[currentForm]);

  const switchForm = () => {

    if (currentForm === LOGIN_FORM) {
      setCurrentForm(TEXT_REGISTRATION, REGISTRATION_FORM);
      return false;
    } else if (currentForm === REGISTRATION_FORM && step === 0) {
      setCurrentForm(TEXT_ENTER, LOGIN_FORM);
      return false;
    } else if (currentForm === REGISTRATION_FORM && step !== 0) {
      decrementStep()
    }
  };

  const setCurrentForm = (title, form) => {
    setState(prevState => ({
      ...prevState,
      title,
      currentForm: form
    }));
  };

  const decrementStep = () => {
    setState(prevState => ({
      ...prevState,
      step: prevState.step - 1
    }))
  };

  const incrementStep = () => {
    setState(prevState => ({
      ...prevState,
      step: prevState.step + 1
    }))
  };

  const onClickButton = () => {
    if (currentForm === REGISTRATION_FORM && step !== Object.keys(state[REGISTRATION_FORM]).length - 1) {
      validationFields()
    }
  };

  const validationFields = () => {
    let error = false;
    let errorFields = {};

    fields.forEach(item => {
      if (item.value === '') {
        error = true;

        errorFields[item.name] = {
          ...item,
          error: true
        }
      }
    });


    if (!error) {
      incrementStep()
    } else {
      setState(prevState => ({
        ...prevState,
        [currentForm]: {
          ...prevState[currentForm],
          ...errorFields
        }
      }))
    }
  };


  const onChange = (name, value) => {

    setState(prevState => ({
      ...prevState,
      [currentForm]: {
        ...prevState[currentForm],
        [name]: {
          ...prevState[currentForm][name],
          value
        }
      }
    }))
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
      <Field
       index={key}
       key={item.name}
       placeholder={item.placeholder}
       type={item.type}
       name={item.name}
       error={item.error}
       onChange={onChange}
       value={item.value}
       fieldsLength={fields.length - 1}
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
        onClick={onClickButton}
       >
         {currentForm === LOGIN_FORM ?
          TEXT_ENTER : (
           currentForm === REGISTRATION_FORM && step !== Object.keys(state[currentForm]).length - 1 ? TEXT_NEXT : TEXT_END
          )}
       </Button>
     </div>
     {currentForm === REGISTRATION_FORM && (
      <div className="login-registration-form__pagination">
        {new Array(maxSteps).fill(null).map((item, key) => (
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