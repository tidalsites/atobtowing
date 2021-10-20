import { FC, useState, useEffect } from "react";
import "./App.scss";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
import { Gallery } from "../Gallery/Gallery";
import { Partners } from "../Partners/Partners";
import { Help } from "../Help/Help";
import { ContactForm } from "../ContactForm/ContactForm";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [categoryValue, setCategoryValue] = useState<string>("tow");
  const [geolocationAllowed, setGeolocationAllowed] = useState<boolean>(false);

  useEffect(() => {
    try {
      sessionStorage.removeItem("atob-location-information");
    } catch (e) {}
  });
  return (
    <div className="App">
      <Home
        setShowContactForm={setShowContactForm}
        geolocationAllowed={geolocationAllowed}
        setGeolocationAllowed={setGeolocationAllowed}
      />
      <Services
        setShowContactForm={setShowContactForm}
        setCategoryValue={setCategoryValue}
      />
      <Partners />
      <Gallery />
      <Help />
      <ContactForm
        visible={showContactForm}
        toggle={setShowContactForm}
        categoryValue={categoryValue ? categoryValue : "tow"}
        setCategoryValue={setCategoryValue}
      />
      <Footer />
    </div>
  );
};
