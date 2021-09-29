import { FC } from "react";
import "./Home.scss";
import { Map } from "./Map";
import { Services } from "../Services/Services";

export const Home: FC = () => {
  return (
    <div className="Home">
      <section className="Home__hero">
        <span className="Home__hero__banner">
          Norfolks Primary AAA Provider
        </span>
        <div className="Home__hero__content">
          <div className="Home__hero__content__type">
            <h1>
              <span>A to B</span> Towing & Recovery
            </h1>
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
            <a href="mailto:dhaynes916@gmail.com" className="btn secondary">
              Get Quote
            </a>
          </div>
        </div>
        <div className="Home__hero__map">
          <Map />
          <div className="Home__hero__map__decoration-1"></div>
          <div className="Home__hero__map__decoration-2"></div>
        </div>
      </section>
    </div>
  );
};
