import { FC } from "react";
import "./Partners.scss";

export const Partners: FC = () => {
  return (
    <div className="Partners">
      <div className="Partners__header">
        <h3>We Value Our Partnerships</h3>
        <p>
          We partner with some of the best companies in the business. AtoB
          Towing is the primary AAA provider in Norfolk
        </p>
      </div>
      <div className="Partners__content">
        <div className="Partners__content__partner">
          <span>AAA</span>
        </div>
        <div className="Partners__content__partner">
          <span>ABC</span>
        </div>
        <div className="Partners__content__partner">
          <span>DEF</span>
        </div>
        <div className="Partners__content__partner">
          <span>GHI</span>
        </div>
        <div className="Partners__content__partner">
          <span>JKL</span>
        </div>
      </div>
    </div>
  );
};
