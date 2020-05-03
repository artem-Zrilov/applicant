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
const TEXT_NEXT = "Дальше";
const TEXT_RESET_PASSWORD = "Забыли пароль?";

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
        placeholder: 'Логин',
        error: false,
      },
      {
        value: '',
        name: 'app_user_password',
        type: 'password',
        fieldType: 'input',
        placeholder: 'Пароль',
        error: false,
      }
    ]
  },
  registration: {
    0: [
      {
        value: '',
        name: 'app_new_user_name',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Имя',
        error: false,
      },
      {
        value: '',
        name: 'app_new_user_surname',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Фамилия',
        error: false,
      },
      {
        value: '',
        name: 'app_new_user_patronymic',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Отчество',
        error: false,
      }
    ],
    1: [
      {
        value: '',
        name: 'app_new_user_login',
        type: 'text',
        fieldType: 'input',
        placeholder: 'Логин',
        error: false,
      },
      {
        value: '',
        name: 'app_new_user_password',
        type: 'password',
        fieldType: 'input',
        placeholder: 'Пароль',
        error: false,
      },
      {
        value: '',
        name: 'app_new_user_phone',
        type: 'tel',
        fieldType: 'input',
        placeholder: 'Телефон',
        error: false,
      }
    ],
    2: [
      {
        value: '',
        name: 'app_new_user_language',
        type: 'text',
        fieldType: 'select',
        placeholder: 'Иностранный язык',
        error: false,
      },
      {
        value: '',
        name: 'app_new_user_hostel',
        type: 'text',
        fieldType: 'checkbox',
        label: 'Общежитие',
        error: false,
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

  const onClickButton = () => {
    if (currentForm === REGISTRATION_FORM && step !== Object.keys(state[REGISTRATION_FORM]).length - 1) {
      validationFields()
    }
  };

  const validationFields = () => {
    let error = false;
    const newFields = fields.map(item => {
      if  (item.value === '') {
        error = true;
        return({
          ...item,
          error: true
        })
      }

      return ({
        ...item,
        error: false
      })
    });

    if (!error) {
      incrementStep()
    } else {
      setState(prevState => ({
        ...prevState,
        [currentForm]: {
          ...prevState[currentForm],
          [step]: newFields
        }
      }))
    }
  };

  const incrementStep = () => {
    setState(prevState => ({
      ...prevState,
      step: prevState.step + 1
    }))
  };

  const onChange = (name, value) => {
    const newFields = fields.map(item => {
      if (item.name === name) {
        return({
          ...item,
          value: value,
          error: false
        })
      }
      return item
    })

    setState(prevState => ({
      ...prevState,
      [currentForm]: {
        ...prevState[currentForm],
        [step]: newFields
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
      <Input
       key={item.name}
       className={cx('login-registration-form__field', {
         'login-registration-form__field--margin--none': fields.length - 1 === key
       })}
       placeholder={item.placeholder}
       type={item.type}
       name={item.name}
       error={item.error}
       onChange={onChange}
       value={item.value}
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