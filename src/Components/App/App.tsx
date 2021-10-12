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
  const [categoryValue, setCategoryValue] = useState<string>("tow");
  return (
    <div className="App">
      <Home setShowContactForm={setShowContactForm} />
      <Services
        setShowContactForm={setShowContactForm}
        setCategoryValue={setCategoryValue}
      />
      <Gallery />
      <Partners />
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
