import { FC } from "react";
import "./App.scss";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
import { Partners } from "../Partners/Partners";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  return (
    <div className="App">
      <Home />
      <Services />
      <Partners />
      <Footer />
    </div>
  );
};
