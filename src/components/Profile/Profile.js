import React from 'react'
import './Profile.css'
import useFormWithValidation from '../../hooks/useFormValidation'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile({ onSaveProfile, onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext)

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({})

  function handleSignOut() {
    onSignOut()
  }

  function handleOnSubmit(evt) {
    evt.preventDefault()
    onSaveProfile(values)
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form
        className="profile__form"
        action="post"
        name="profile"
        noValidate
        onSubmit={handleOnSubmit}
      >
        <article className="profile__field">
          <label className="profile__label">
            Имя
            <input
              className="profile__input profile__input_type_name"
              id="name-input"
              type="text"
              name="name"
              placeholder={currentUser.name}
              pattern="[a-zA-Z -]{2,30}"
              required
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <span
            className={`profile__input-error ${
              !isValid && 'profile__input-error_visible'
            }`}
          >
            {errors.name}
          </span>
        </article>
        <article className="profile__field">
          <label className="profile__label">
            Почта
            <input
              className="profile__input profile__input_type_email"
              id="email-input"
              type="email"
              name="email"
              placeholder={currentUser.email}
              required
              minLength="5"
              maxLength="100"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <span
            className={`profile__input-error ${
              isValid && 'profile__input-error_visible'
            }`}
          >
            {errors.email}
          </span>
        </article>
        <div className="profile__buttons">
          <button
            type="submit"
            className={`profile__button profile__button_type_edit 
            ${!isValid && 'profile__button_disabled'}`}
            disabled={!isValid}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="profile__button profile__button_type_exit"
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  )
}

export default Profile
