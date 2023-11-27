import "./Awards.scss";
import allstate from "../../Assets/allstate.svg";
import geico from "../../Assets/geico.svg";
import agero from "../../Assets/agero.svg";
import nsd from "../../Assets/nsd+questx.png";

export const Awards = () => {
  return (
    <div className="Awards">
      <div className="Awards__wrapper">
        <h2 className="Awards__header">Awards</h2>
        <div>
          <p className="Awards__name">2023 ACE Award Winner</p>
          <p className="Awards__sponsored-by">Selected for:</p>
          <ul className="Awards__criteria">
            <li>
              <i className="fa-regular fa-circle-check"></i>
              <span>Excellence in meeting ETAs</span>
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>
              <span>Expressed Customer Satisfaction</span>
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>
              <span>Overall Knowledge and Professionalism</span>
            </li>
          </ul>
          <p className="Awards__sponsored-by">Sponsored by:</p>
          <div className="Awards__sponsors">
            <img src={allstate} alt="Allstate" />
            <img src={geico} alt="Geico" />
            <img src={agero} alt="Agero" />
            <img src={nsd} alt="NSD + QuestX" />
          </div>
        </div>
      </div>
    </div>
  );
};
