import { FC, Dispatch, SetStateAction } from "react";

interface IContentElement {
  type: string;
  content?: string;
  contentArray?: string[];
}

interface IServiceProps {
  name: string;
  short_name: string;
  elements: IContentElement[];
  setShowContactForm: Dispatch<SetStateAction<boolean>>;
}

export const Service: FC<IServiceProps> = ({
  name,
  short_name,
  elements,
  setShowContactForm,
}) => {
  return (
    <div className="Services__content__service Service">
      <div className="Services__content__service__name">{name}</div>
      <div className="Services__content__service__content">
        <div className="Services__content__service__content__text content_show">
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
            return serviceContent;
          })()}
        </div>
        <button
          onClick={() => {
            setShowContactForm(true);
          }}
        >
          Request {short_name} Service
        </button>
      </div>
    </div>
  );
};
