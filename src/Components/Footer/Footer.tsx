import { FC } from "react";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__copy">&copy; A to B Towing LLC</div>
      <div className="Footer__smedia">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="far fa-envelope"></i>
      </div>
    </div>
  );
};
