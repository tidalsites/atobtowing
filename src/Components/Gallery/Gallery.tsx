import { FC } from "react";
import "./Gallery.scss";
// import trucks1 from "../../Assets/trucks1.jpg";
// import trucks2 from "../../Assets/trucks2.jpg";
// import trucks3 from "../../Assets/trucks3.jpg";
// import trucks4 from "../../Assets/trucks4.jpg";
import trucks1 from "../../Assets/gallery-img1.png";
import trucks2 from "../../Assets/gallery-img2.jpg";
import trucks3 from "../../Assets/gallery-img3.jpg";
import trucks4 from "../../Assets/gallery-img4.jpg";

export const Gallery: FC = () => {
  return (
    <div className="Gallery">
      <div className="Gallery__header">
        <h3>Gallery</h3>
      </div>
      <div className="Gallery__content">
        <div className="GalleryItem img-landscape">
          <img src={trucks1} alt="Alysons Roadside Tow Truck" />
        </div>
        <div className="GalleryItem img-landscape">
          <img src={trucks2} alt="Alysons Roadside Tow Truck" />
        </div>
        <div className="GalleryItem">
          <img src={trucks3} alt="Alysons Roadside Tow Truck" />
        </div>
        <div className="GalleryItem">
          <img src={trucks4} alt="Alysons Roadside Tow Truck" />
        </div>
      </div>
      <div className="Gallery__smedia">
        <h4>Check us out on Social Media</h4>
        <div className="Gallery__smedia__content">
          <a href="https://www.facebook.com/atobroadsideassistance/">
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};
