import { FC } from "react";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__row">
        {/* <div className="Footer__contact">
          <div className="Footer__contact__phone Footer__contact__item">
            <i className="fas fa-phone"></i>
            <span>(757) 123-4567</span>
          </div>
          <div className="Footer__contact__email Footer__contact__item">
            <i className="fas fa-envelope"></i>
            <span>scott@atobtowing.com</span>
          </div>
        </div> */}
        {/* <div className="Footer__smedia">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div> */}
      </div>
      <div className="Footer__row">
        <div className="Footer__hours">Hours: 6 - Midnight</div>
        <div className="Footer__copy">&copy; A to B Towing LLC</div>
      </div>
    </div>
  );
};
