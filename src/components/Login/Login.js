import './Login.css'
import Input from '../Input/Input'
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'
import AuthForm from '../AuthForm/AuthForm'
import useFormWithValidation from '../../hooks/useFormValidation'

function Register({ onSubmitLogin }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({})

  function handleOnSubmit(evt) {
    evt.preventDefault()
    onSubmitLogin(values)
    resetForm()
  }

  return (
    <section className="login">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Логотип" />
      </NavLink>
      <h2 className="login__title">Рады видеть!</h2>

      <AuthForm
        name="login"
        submitText="Войти"
        linkText="Регистрация"
        linkSubText="Ещё не зарегистрированы?"
        link="/signup"
        isSubmitDisabled={isValid}
        handleOnSubmit={handleOnSubmit}
      >
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          minLength="5"
          maxLength="100"
          errorText={errors.email}
          onChange={handleChange}
          value={values.email || ''}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          errorText="Что-то пошло не так..."
          minLength="5"
          errorText={errors.password}
          onChange={handleChange}
          value={values.password || ''}
        />
      </AuthForm>
    </section>
  )
}

export default Register
