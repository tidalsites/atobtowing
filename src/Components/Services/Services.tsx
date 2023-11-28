import { FC, Dispatch, SetStateAction } from "react";
import "./Services.scss";
import { Service } from "./Service";
import ServiceData from "./Services.json";

interface IServiceContent {
  text: string;
  timeframe: string;
  price: string;
}

interface IContentElements {
  type: string;
  content?: string;
  contentArray?: string[];
}

interface IService {
  name: string;
  short_name: string;
  content: IServiceContent;
  icon: string;
  elements: IContentElements[];
}

interface IServicesProps {
  setShowContactForm: Dispatch<SetStateAction<boolean>>;
}

export const Services: FC<IServicesProps> = ({ setShowContactForm }) => {
  const services: IService[] = ServiceData.services;
  return (
    <section className="Services">
      <h2 className="Services__header">Services</h2>
      <div className="Services__content">
        {services.map((service, index) => {
          let { name, short_name, elements } = service;
          return (
            <Service
              name={name}
              short_name={short_name}
              elements={elements}
              setShowContactForm={setShowContactForm}
              key={`service_${index}`}
            />
          );
        })}
      </div>
    </section>
  );
};
