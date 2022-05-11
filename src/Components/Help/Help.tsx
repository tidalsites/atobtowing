import { FC } from "react";
import "./Help.scss";

export const Help: FC = () => {
  return (
    <div className="Help">
      <div className="Help__wrapper">
        <div className="Help__title">
          <span>
            Are you stalled by the side of the road? Alysons Roadside can come
            to your rescue! Here are a few of the ways we can help you out:
          </span>
        </div>
        <div className="Help__list">
          <ul>
            <li>
              Jump-starts. A dead car battery is nothing to panic about. Alysons
              Roadside can give you the jumpstart you need to get home safely.
              We also sell and install Batteries at your breakdown location. We
              come to you for most vehicle’s for a smooth easy transaction to
              get you up and going quickly.
            </li>
            <li>
              Fuel deliveries. Call Alysons Roadside to deliver fuel to your
              stranded vehicle.
            </li>
            <li>
              Lockouts. Did you leave your keys in the vehicle when you shut the
              door? Alysons Roadside can pop your car door open quickly and
              safely.
            </li>
            <li>
              Flat tires. Feeling a little deflated? Alysons Roadside can pump,
              plug or switch out your flat tire with your spare tire quickly and
              safely.
            </li>
          </ul>
        </div>
        <div className="Help__content">
          <p>
            Have you been involved in an accident or experienced a mechanical
            breakdown?Are you stranded in a parking lot or by the side of the
            road, wondering what you should do next? Don’t get anxious or
            frustrated – call Alysons Roadside at 757-274-3838. We’re a trusted
            local service that can come to you wherever you are in the Hampton
            Roads Area. There’s no minimum or maximum number of miles required
            for our fast and friendly assistance.
          </p>
        </div>
        <div className="Help__cta">
          <a href="tel:7572743838">Call Now</a>
        </div>
      </div>
    </div>
  );
};
