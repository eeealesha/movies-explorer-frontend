import './Login.css';
import Input from '../Input/Input';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <section className="login">
      <NavLink to="/" className="logo"><img src={logo} alt="Логотип"/></NavLink>
      <h2 className="login__title">Рады видеть!</h2>

      <AuthForm
        name="login"
        submitText="Войти"
        linkText="Регистрация"
        linkSubText="Ещё не зарегистрированы?"
        link="/signup"
      >
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          minLength="5"
          maxLength="100"
        />  
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          errorText="Что-то пошло не так..."
          minLength="5"
        /> 
      </AuthForm>

    </section>
  );
}

export default Register;