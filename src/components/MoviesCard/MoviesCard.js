import React from 'react'
import './MoviesCard.css'

function MoviesCard({ savedMovies, movie, onBookmarkClick, isSavedMovie }) {
  const { nameRU, duration, trailer, image } = movie

  let isSaved = isSavedMovie(movie)

  function durationFormat(duration) {
    const hh = Math.trunc(duration / 60)
    const mm = duration % 60
    return `${hh > 0 ? hh + 'ч ' : ''}${mm}м`
  }

  function handleBookmarkClick(evt) {
    evt.preventDefault()
    onBookmarkClick(movie, !isSaved)
  }

  function handleOnDelete() {
    onBookmarkClick(movie, false)
  }
  return (
    <article className="card">
      <div className="card__container">
        <div className="card__wrapper">
          <div className="card__heading">
            <h2 className="card__title">{nameRU}</h2>
            <p className="card__duration">{durationFormat(duration)}</p>
          </div>
          {savedMovies ? (
            <div className="card__delete" onClick={handleOnDelete}></div>
          ) : (
            <button className={`card__heart`} onClick={handleBookmarkClick}>
              {isSavedMovie ? (
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.65242 1.89789L7.01419 2.24773L7.36168 1.8837C8.08219 1.12888 8.97817 0.5 10.1818 0.5C12.1019 0.5 13.5 2.02862 13.5 4C13.5 4.9368 13.0747 5.73587 12.3847 6.40496L7 11.3228L1.60992 6.40004L1.59988 6.39087L1.58936 6.38227C0.885614 5.80642 0.5 4.96765 0.5 4C0.5 2.02862 1.89813 0.5 3.81818 0.5C5.01333 0.5 5.90847 1.17846 6.65242 1.89789Z"
                    stroke="#E8E8E8"
                  />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1818 0C8.78182 0 7.76364 0.738462 7 1.53846C6.23636 0.8 5.21818 0 3.81818 0C1.59091 0 0 1.78462 0 4C0 5.10769 0.445455 6.09231 1.27273 6.76923L7 12L12.7273 6.76923C13.4909 6.03077 14 5.10769 14 4C14 1.78462 12.4091 0 10.1818 0Z"
                    fill="#FF3055"
                  />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
      <a href={trailer} target="_blank" rel="noopener noreferrer">
        <img className="card__img" src={image} alt="Обложка фильма" />
      </a>
    </article>
  )
}

export default MoviesCard
