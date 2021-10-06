import { FC, useState } from "react";
import "./App.scss";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
import { Gallery } from "../Gallery/Gallery";
import { Partners } from "../Partners/Partners";
import { ContactForm } from "../ContactForm/ContactForm";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  return (
    <div className="App">
      <Home setShowContactForm={setShowContactForm} />
      <Services />
      <Gallery />
      <Partners />
      <ContactForm visible={showContactForm} toggle={setShowContactForm} />
      <Footer />
    </div>
  );
};
