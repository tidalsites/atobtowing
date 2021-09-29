import { FC } from "react";
import "./App.scss";
import { Home } from "../Home/Home";
import { Services } from "../Services/Services";
import { Footer } from "../Footer/Footer";

export const App: FC = () => {
  return (
    <div className="App">
      <Home />
      <Services />
      <Footer />
    </div>
  );
};
