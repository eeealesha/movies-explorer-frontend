import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a href="https://github.com/eeealesha/how-to-learn" className="portfolio__link" target="_blank">
            <p className="portfolio__text">Статичный сайт</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/eeealesha/russian-travel" className="portfolio__link" target="_blank">
            <p className="portfolio__text">Адаптивный сайт</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/eeealesha/react-mesto-api-full" className="portfolio__link" target="_blank">
            <p className="portfolio__text">Одностраничное приложение</p>
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;