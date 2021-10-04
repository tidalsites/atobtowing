import { FC } from "react";
import tow from "../../Assets/tow-icon.png";
import tire from "../../Assets/tire-icon.png";

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
  let IconComponent = () => <img src={tow} alt="Tow truck" />;
  switch (icon) {
    case "tire":
      IconComponent = () => <img src={tire} alt="Flat tire" />;
      break;
    default:
      break;
  }
  const { text, timeframe, price } = content;
  return (
    <div className="Services__content__service Service">
      <div className="Services__content__service__icon">
        {/* <img src={tow} alt="Tow truck" /> */}
        <IconComponent />
      </div>
      <div className="Services__content__service__name">{name}</div>
      <div className="Services__content__service__content">
        <p className="Services__content__service__content__text">{text}</p>
        <p className="Services__content__service__content__timeframe">
          Est. timframe: {timeframe}
        </p>
        <p className="Services__content__service__content__price">
          Price: {price}
        </p>
      </div>
    </div>
  );
};

const TowIcon: FC = () => {
  return <img src={tow} alt="Tow Truck" />;
};
