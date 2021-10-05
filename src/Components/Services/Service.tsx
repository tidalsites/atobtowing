import { FC } from "react";
import tow from "../../Assets/tow-icon.png";
import tire from "../../Assets/tire-icon.png";
import battery from "../../Assets/battery-icon.png";
import gas from "../../Assets/gas-icon.png";
import unlock from "../../Assets/unlock-icon.png";

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
  let IconComponent: FC = TowIcon;
  switch (icon) {
    case "tire":
      IconComponent = TireIcon;
      break;
    case "battery":
      IconComponent = BatteryIcon;
      break;
    case "gas":
      IconComponent = GasIcon;
      break;
    case "unlock":
      IconComponent = UnlockIcon;
      break;
    default:
      break;
  }
  const { text, timeframe, price } = content;
  return (
    <div className="Services__content__service Service">
      <div className="Services__content__service__icon">
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

const TireIcon: FC = () => {
  return <img src={tire} alt="Flat tire" />;
};

const BatteryIcon: FC = () => {
  return <img src={battery} alt="Car battery" />;
};

const GasIcon: FC = () => {
  return <img src={gas} alt="Gas container" />;
};

const UnlockIcon: FC = () => {
  return <img src={unlock} alt="Car with an unlocked padlock" />;
};
