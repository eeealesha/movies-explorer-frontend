import React from 'react'
import './Register.css'
import Input from '../Input/Input'
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'
import AuthForm from '../AuthForm/AuthForm'
import useFormWithValidation from '../../hooks/useFormValidation'

function Register({ onSubmitRegister }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({})

  function handleOnSubmit(evt) {
    evt.preventDefault()
    onSubmitRegister(values)
    resetForm()
  }

  return (
    <section className="register">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Логотип" />
      </NavLink>
      <h2 className="register__title">Добро пожаловать!</h2>

      <AuthForm
        name="register"
        submitText="Зарегистрироваться"
        linkText="Войти"
        linkSubText="Уже зарегистрированы?"
        link="/signin"
        isSubmitDisabled={isValid}
        handleOnSubmit={handleOnSubmit}
      >
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          errorText={errors.name}
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.name || ''}
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          errorText={errors.email}
          minLength="5"
          maxLength="100"
          onChange={handleChange}
          value={values.email || ''}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          errorText={errors.password}
          minLength="5"
          onChange={handleChange}
          value={values.password || ''}
        />
      </AuthForm>
    </section>
  )
}

export default Register
