import React from 'react';
import './Register.css';
import Input from '../Input/Input';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

import { getErrorText, checkValid } from '../../utils/formValidator';

function Register({onSubmitRegister}) {

  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [name, setName] = React.useState("")

  function handleInputChange(evt) {
    setName(evt.value)
    console.log(evt)
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name] : value
    });
  }

  const [errors, setErrors] = React.useState({
    name: {
      required: '',
      minLength: '',
      maxLength: '',
    },
    email: {
      required: '',
      minLength: '',
      isEmail: '',
    },
    password: {
      required: '',
      minLength: '',
    },
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false);

  React.useEffect(() => {

    const { name, email, password } = formValues;

    console.log(formValues)

    const nameValid = checkValid('name', name);
    const emailValid = checkValid('email', email);
    const passwordValid = checkValid('password', password);

    setErrors({
      name: nameValid,
      email: emailValid,
      password: passwordValid,
    });

    const isNameValid = Object.values(nameValid).every((item) => item === '');
    const isEmailValid = Object.values(emailValid).every((item) => item === '');
    const isPasswordValid = Object.values(passwordValid).every((item) => item === '');

    setIsSubmitDisabled(!isNameValid || !isEmailValid || !isPasswordValid);

  }, [formValues]);

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onSubmitRegister(formValues);
  }

  return (
    <section className="register">
      <NavLink to="/" className="logo"><img src={logo} alt="Логотип"/></NavLink>
      <h2 className="register__title">Добро пожаловать!</h2>

      <AuthForm
        name="register"
        submitText="Зарегистрироваться"
        linkText="Войти"
        linkSubText="Уже зарегистрированы?"
        link="/signin"
        isSubmitDisabled={isSubmitDisabled}
        handleOnSubmit={handleOnSubmit}
      >
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          errorText={getErrorText(errors.name)}
          minLength="2"
          maxLength="30"
          onChange={handleInputChange}
          value={name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          errorText={getErrorText(errors.email)}
          minLength="5"
          maxLength="100"
          onChange={handleInputChange}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          errorText={getErrorText(errors.password)}
          minLength="5"
          onChange={handleInputChange}
        />
      </AuthForm>
    </section>
  );
}

export default Register;