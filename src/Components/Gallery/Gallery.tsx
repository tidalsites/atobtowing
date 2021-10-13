import { FC } from "react";
import "./Gallery.scss";

export const Gallery: FC = () => {
  return (
    <div className="Gallery">
      <div className="Gallery__header">
        <h3>Gallery</h3>
      </div>
      <div className="Gallery__content">
        <GalleryItem img="test" alt="test" />
        <GalleryItem img="test" alt="test" />
        <GalleryItem img="test" alt="test" />
        <GalleryItem img="test" alt="test" />
        <GalleryItem img="test" alt="test" />
        <GalleryItem img="test" alt="test" />
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

const GalleryItem: FC<{ img: string; alt: string }> = ({ img, alt }) => {
  return (
    <div className="GalleryItem">
      <img src={img} alt={alt} />
    </div>
  );
};
