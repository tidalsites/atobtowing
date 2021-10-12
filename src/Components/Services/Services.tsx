import { FC, Dispatch, SetStateAction } from "react";
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
  short_name: string;
  content: IServiceContent;
  icon: string;
}

interface IServicesProps {
  setShowContactForm: Dispatch<SetStateAction<boolean>>;
  setCategoryValue: Dispatch<SetStateAction<string>>;
}

export const Services: FC<IServicesProps> = ({
  setShowContactForm,
  setCategoryValue,
}) => {
  const services: IService[] = ServiceData.services;
  return (
    <section className="Services">
      <h3 className="Services__header">Services</h3>
      <div className="Services__content">
        {services.map((service) => {
          let { name, short_name, content, icon } = service;
          return (
            <Service
              name={name}
              short_name={short_name}
              content={content}
              icon={icon}
              setShowContactForm={setShowContactForm}
              setCategoryValue={setCategoryValue}
            />
          );
        })}
      </div>
    </section>
  );
};
