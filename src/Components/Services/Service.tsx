import { FC, Dispatch, SetStateAction, useState } from "react";
import tow from "../../Assets/tow-icon.png";
import tire from "../../Assets/tire-icon.png";
import battery from "../../Assets/battery-icon.png";
import gas from "../../Assets/gas-icon.png";
import unlock from "../../Assets/unlock-icon.png";
import wrecker from "../../Assets/wrecker-icon.png";
import jumpstart from "../../Assets/jumpstart-icon.png";

interface IServiceContent {
  text: string;
  timeframe: string;
  price: string;
}

interface IContentElement {
  type: string;
  content?: string;
  contentArray?: string[];
}

interface IServiceProps {
  name: string;
  short_name: string;
  content: IServiceContent;
  icon: string;
  elements: IContentElement[];
  setShowContactForm: Dispatch<SetStateAction<boolean>>;
  setCategoryValue: Dispatch<SetStateAction<string>>;
  key: string;
}

export const Service: FC<IServiceProps> = ({
  name,
  short_name,
  content,
  icon,
  elements,
  setShowContactForm,
  setCategoryValue,
}) => {
  const [showContent, setShowContent] = useState<boolean>(false);

  let IconComponent: FC = TowIcon;
  switch (icon) {
    case "tire":
      IconComponent = TireIcon;
      break;
    case "battery":
      IconComponent = BatteryIcon;
      break;
    case "roadside":
      IconComponent = GasIcon;
      break;
    case "unlock":
      IconComponent = UnlockIcon;
      break;
    case "wrecker":
      IconComponent = WreckerIcon;
      break;
    case "jumpstart":
      IconComponent = JumpstartIcon;
      break;
    default:
      break;
  }
  return (
    <div className="Services__content__service Service">
      <div className="Services__content__service__icon">
        <IconComponent />
      </div>
      <div className="Services__content__service__name">{name}</div>
      <div className="Services__content__service__content">
        <div
          className={`Services__content__service__content__text ${
            showContent ? "content_show" : "content_hide"
          }`}
        >
          {(() => {
            let serviceContent = elements.map((element) => {
              if (element.type === "ul") {
                return (
                  <ul>
                    {element.contentArray!.map((text) => {
                      return <li>{text}</li>;
                    })}
                  </ul>
                );
              }

              return <p>{element.content}</p>;
            });
            serviceContent.push(
              <button
                className="more_button"
                onClick={() => setShowContent(!showContent)}
              >
                {`...${showContent ? "Read Less" : "Read More"}`}
              </button>
            );
            return serviceContent;
          })()}
        </div>
        <button
          onClick={() => {
            setCategoryValue(icon);
            setShowContactForm(true);
          }}
        >
          Request {short_name} Service
        </button>
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

const WreckerIcon: FC = () => {
  return <img src={wrecker} alt="Tow truck with car mounted on back" />;
};

const JumpstartIcon: FC = () => {
  return <img src={jumpstart} alt="Jumpstart cables" />;
};
