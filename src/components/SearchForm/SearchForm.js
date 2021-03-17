import './SearchForm.css'
import search from '../../images/search.svg'
import icon from '../../images/icon.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import React from 'react'

function SearchForm({ onSubmitSearch, onFilterShort, isLoading }) {
  const [query, setQuery] = React.useState('')
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false)

  function handleOnChange(evt) {
    setQuery(evt.target.value)
  }

  function handleOnSubmit(evt) {
    evt.preventDefault()
    onSubmitSearch(query)
  }

  React.useEffect(() => {
    setIsSubmitDisabled(query === '')
  }, [query])

  return (
    <section className="search">
      <div className="search__wrapper">
        <img className="search__icon" src={icon} alt="Искать" />
        <form name="search" className="search__form" onSubmit={handleOnSubmit}>
          <input
            required
            className="search__input"
            placeholder="Фильм"
            onChange={handleOnChange}
            disabled={isLoading}
          />
          <button
            className={`search__button ${
              isSubmitDisabled && 'search__button_disabled'
            }`}
            disabled={isSubmitDisabled || isLoading}
          >
            <img className="search__img" src={search} alt="Искать" />
          </button>
        </form>
      </div>
      <div className="search__short">
        <FilterCheckbox onFilter={onFilterShort} />
        <p className="search__filter-text">Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm
