import { FC } from "react";

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

export const Service: FC<IService> = ({ name, content, icon }) => {
  const { text, timeframe, price } = content;
  return (
    <div className="Services__service Service">
      <div className="Services__service__icon">
        <span className="material-icons">{icon}</span>
      </div>
      <div className="Services__service__name">{name}</div>
      <div className="Services__service__content">
        <p className="Services__service__content__text">{text}</p>
        <p className="Services__service__content__timeframe">
          Est. timframe: {timeframe}
        </p>
        <p className="Services__service__content__price">Price: {price}</p>
      </div>
    </div>
  );
};
