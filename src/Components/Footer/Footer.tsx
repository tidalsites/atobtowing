import { FC } from "react";
import "./Footer.scss";

export const Footer: FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__copy">&copy;2021 AtoB Towing, LLC</div>
      <div>
        Powered by <a href="https://tidalsites.com">Tidal Sites</a>
      </div>
    </div>
  );
};
