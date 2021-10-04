import React, {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  BaseSyntheticEvent,
} from "react";
import "./ContactForm.scss";
import emailjs from "emailjs-com";

interface IContactFormProps {
  visible: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}

export const ContactForm: FC<IContactFormProps> = ({ visible, toggle }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [category, setCategory] = useState<string>("tow");
  const [description, setDescription] = useState<string>("");
  const defaultLocationUrl =
    "https://www.google.com/maps/search/?api=1&query=36.8508,-76.2859";

  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;

  const SERVICE_ID = REACT_APP_SERVICE_ID ? REACT_APP_SERVICE_ID : "";
  const TEMPLATE_ID = REACT_APP_TEMPLATE_ID ? REACT_APP_TEMPLATE_ID : "";
  const USER_ID = REACT_APP_USER_ID ? REACT_APP_USER_ID : "";

  const closeModal = () => {
    toggle(false);
    document.body.classList.remove("modal-open");
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phone,
      category,
      description,
      location: defaultLocationUrl,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className={`ContactForm ${visible ? "ContactForm-show" : ""}`}>
      <div className="ContactForm__wrapper">
        <div className="ContactForm__wrapper__header">
          <span>AtoB Towing</span>
          <button
            className="ContactForm__wrapper__header__close"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <form className="ContactForm__wrapper__form" onSubmit={handleSubmit}>
          <div className="ContactForm__wrapper__form__group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              name="firstName"
              type="text"
              id="firstName"
            />
            <span className="form-error"></span>
          </div>
          <div className="ContactForm__wrapper__form__group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              name="lastName"
              type="text"
            />
            <span className="form-error"></span>
          </div>
          <div className="ContactForm__wrapper__form__group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
            />
            <span className="form-error"></span>
          </div>
          <div className="ContactForm__wrapper__form__group">
            <label htmlFor="phone">Phone</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              type="text"
            />
            <span className="form-error"></span>
          </div>
          <div className="ContactForm__wrapper__form__group">
            <label htmlFor="category">Issue Category</label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
            >
              <option value="tow">Towing & Recovery</option>
              <option value="roadside">Roadside Assistance</option>
              <option value="battery">Battery</option>
              <option value="tire">Tire</option>
              <option value="unlock">Vehicle Unlock</option>
              <option value="other">Other</option>
            </select>
            <span className="form-error"></span>
          </div>
          <div className="ContactForm__wrapper__form__group">
            <label htmlFor="description">Description of problem</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              cols={30}
              rows={10}
            ></textarea>
            <span className="form-error"></span>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
