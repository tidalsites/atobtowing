import {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  BaseSyntheticEvent,
} from "react";
import "./ContactForm.scss";

interface IContactFormProps {
  visible: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
  categoryValue: string;
  setCategoryValue: Dispatch<SetStateAction<string>>;
}

export const ContactForm: FC<IContactFormProps> = ({
  visible,
  toggle,
  categoryValue,
  setCategoryValue,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [category, setCategory] = useState<string>(categoryValue || "tow");
  const [description, setDescription] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [failureMessage, setFailureMessage] = useState<string | null>(null);
  const [messageSending, setMessageSending] = useState<boolean>(false);
  let defaultLocationUrl: string;

  let locationData: { lat: number; lng: number } | null;

  try {
    locationData = JSON.parse(
      localStorage.getItem("atob-location-information") || ""
    );
  } catch (e) {
    locationData = null;
  }

  if (!locationData) {
    defaultLocationUrl = "No location information";
  } else {
    defaultLocationUrl = `https://www.google.com/maps/search/?api=1&query=${
      locationData!.lat
    },${locationData!.lng}`;
  }

  const closeModal = () => {
    setCategoryValue("tow");
    toggle(false);
    document.body.classList.remove("modal-open");
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setMessageSending(true);

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      category,
      description,
      location: defaultLocationUrl,
    };

    const url =
      "https://42clkctcsg.execute-api.us-east-1.amazonaws.com/default/sendContactFormEmail";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(templateParams),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        setMessageSending(false);
        setSuccessMessage(
          "Message sent. We will process your request as soon as we can."
        );
      })
      .catch((e) => {
        setMessageSending(false);
        setFailureMessage(
          "We are sorry. Something has gone wrong and we were unable to send your request. Please try again or contact us via phone."
        );
      });
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
        {messageSending ? (
          <div className="ContactForm__loading">
            <span>Sending Request</span>
            <i className="fas fa-spinner fa-spin"></i>
          </div>
        ) : (
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
                value={categoryValue}
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
        )}
      </div>
      {successMessage && (
        <div className="status-message status-message-success">
          <button onClick={() => setSuccessMessage(null)}>X</button>
          <span>{successMessage}</span>
        </div>
      )}
      {failureMessage && (
        <div className="status-message status-message-fail">
          <button onClick={() => setFailureMessage(null)}>X</button>
          <span>{failureMessage}</span>
        </div>
      )}
    </div>
  );
};
