import { FC } from "react";
import "./Services.scss";
import { Service } from "./Service";
import ServiceData from "./Services.json";

interface IServiceContent {
  text: string;
  timeframe: string;
  price: string;
}

interface IService {
  name: string;
  content: IServiceContent;
  icon: string;
}

export const Services: FC = () => {
  const services: IService[] = ServiceData.services;
  return (
    <section className="Services">
      <h3 className="Services__header">Services</h3>
      <div className="Services__content">
        {services.map((service) => {
          let { name, content, icon } = service;
          return <Service name={name} content={content} icon={icon} />;
        })}
      </div>
    </section>
  );
};
