import { FC } from "react";
import "./Home.scss";
import { Map } from "./Map";
import { Services } from "../Services/Services";

export const Home: FC = () => {
  return (
    <div className="Home">
      <section className="Home__hero">
        <span>Norfolks Primary AAA Provider</span>
        <div className="Home__hero__content">
          <div className="Home__hero__content__type">
            <h1>A to B Towing & Recovery</h1>
            <h2>Let us get you back on track</h2>
            <p>
              A to B Towing & Recovery has been leading the way in Towing
              services in Norfolk since 2010. We offer at-breakdown services as
              well as at-home services to make sure you can get to where you
              need to go.
            </p>
          </div>
          <div className="Home__hero__content__btn-group">
            <button className="btn primary">Call Now</button>
            <button className="btn secondary">Get Quote</button>
          </div>
        </div>
      </section>
      <section className="Home__map">
        <Map />
      </section>
    </div>
  );
};
