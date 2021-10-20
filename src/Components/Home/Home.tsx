import { FC, Dispatch, SetStateAction } from "react";
import "./Home.scss";
import { Map } from "./Map";
import logo from "../../Assets/logo.jpeg";

interface IHomeProps {
  setShowContactForm: Dispatch<SetStateAction<boolean>>;
  geolocationAllowed: boolean;
  setGeolocationAllowed: Dispatch<SetStateAction<boolean>>;
}

export const Home: FC<IHomeProps> = ({
  setShowContactForm,
  geolocationAllowed,
  setGeolocationAllowed,
}) => {
  const openModal = () => {
    setShowContactForm(true);
    document.body.classList.add("modal-open");
  };

  return (
    <div className="Home">
      <section className="Home__hero">
        <div className="Home__hero__contactBar">
          <div className="Home__hero__contactBar__hours">
            <span>Open from 6AM to 12AM</span>
          </div>
          <div className="Home__hero__contactBar__contact">
            <a
              href="tel:757-123-4567"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fas fa-phone"></i>
              <span>(757) 123-4567</span>
            </a>
            <a
              href="mailto:tidalsitestest@gmail.com"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fas fa-envelope"></i>
              <span>scott@atobtowing.com</span>
            </a>
            <a
              href="https://www.facebook.com/atobroadsideassistance/"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fab fa-facebook"></i>
              <span>Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="Home__hero__content">
          <div className="Home__hero__content__type">
            <img src={logo} alt="AtoB Roadside Assistance" />
            <h2>Let us get you back on track</h2>
            <p>
              A to B Towing & Recovery has been leading the way in Towing
              services in Norfolk since 2010. We offer at-breakdown services as
              well as at-home services to make sure you can get to where you
              need to go.
            </p>
          </div>
          <div className="Home__hero__content__btn-group">
            <a href="tel:757-550-0830" className="btn primary">
              Call Now
            </a>
            <button onClick={openModal} className="btn secondary">
              Get Quote
            </button>
          </div>
        </div>
        <div className="Home__hero__map">
          <Map
            geolocationAllowed={geolocationAllowed}
            setGeolocationAllowed={setGeolocationAllowed}
          />
          <div className="Home__hero__map__decoration-1"></div>
          <div className="Home__hero__map__decoration-2"></div>
        </div>
      </section>
    </div>
  );
};
