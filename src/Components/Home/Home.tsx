import { FC } from "react";
import "./Home.scss";
import { Map } from "./Map";

export const Home: FC = () => {
  return (
    <div className="Home">
      <section className="Home__hero">
        <div className="Home__hero__content">
          <div className="Home__hero__content__type">
            <h1>A to B Towing & Recovery</h1>
            <h2>Norfolks Primary AAA Provider</h2>
          </div>
          <div className="Home__hero__content__btn-group">
            <button className="btn primary">Call Now</button>
            <button className="btn secondary">Get Quote</button>
          </div>
        </div>
      </section>
      <section className="Home__map">
        {/* <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDYAvRSjTHLUINsw1yGj9Mevlo-F4N6GdU&q=Norfolk+VA&zoom=12"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe> */}
        <Map />
      </section>
      <section className="Home__services"></section>
    </div>
  );
};
