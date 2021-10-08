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
