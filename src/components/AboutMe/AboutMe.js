import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/aboutme_photo.png';

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <SectionTitle
        title="Студент"
      />
      <div className="aboutme__container">
        <div className="aboutme__student">
          <div className="aboutme__info">
          <h3 className="aboutme__name">Алексей Гаврилов</h3>
          <p className="aboutme__bio">Фронтенд-разработчик, 27 лет</p>
          <p className="aboutme__story">Закончил Яндекс.Практикум по направлению веб-разработка</p>
          </div>
          <ul className="aboutme__links">
            <li className="aboutme__links-item">
              <a className="aboutme__link" href="https://www.facebook.com/alexey.gavrilov" target="_blank">Facebook</a>
            </li>
            <li className="aboutme__links-item">
              <a className="aboutme__link" href="https://github.com/eeealesha" target="_blank">Github</a>
            </li>
          </ul>
        </div>
        <img className="aboutme__photo" src={photo} alt="Фото"/>
      </div>
    </section>

  );
}

export default AboutMe;
