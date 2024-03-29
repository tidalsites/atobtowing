import { FC, Dispatch, SetStateAction } from "react";
import "./Home.scss";
import { Map } from "./Map";
import logo from "../../Assets/logo.png";

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
            <span>Open from 7AM to 11PM</span>
          </div>
          <div className="Home__hero__contactBar__contact">
            <a
              href="tel:7572743838"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fas fa-phone"></i>
            </a>
            <a
              href="mailto:tidalsitestest@gmail.com"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.facebook.com/atobroadsideassistance/"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="Home__hero__contactBar__contact__item"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="Home__hero__content">
          <div className="Home__hero__content__type">
            <img src={logo} alt="AtoB Roadside Assistance" />
            <p className="Home__hero__content__type__subheader">
              Let us get you back on track
            </p>
            <p>
              Alysons Roadside has been leading the way in Towing services in
              Norfolk since 2019. We offer at-breakdown services as well as
              at-home services to make sure you can get to where you need to go.
            </p>
          </div>
          <div className="Home__hero__content__btn-group">
            <a href="tel:7572743838" className="btn primary">
              Call Now
            </a>
            <button onClick={openModal} className="btn secondary">
              Get Quote
            </button>
          </div>
        </div>
        <div className="Home__hero__map">
          <>
            <Map
              geolocationAllowed={geolocationAllowed}
              setGeolocationAllowed={setGeolocationAllowed}
            />
            {geolocationAllowed ? (
              <button onClick={openModal} className="Home__hero__map__cta">
                Request Service
              </button>
            ) : (
              ""
            )}
          </>
        </div>
      </section>
    </div>
  );
};
