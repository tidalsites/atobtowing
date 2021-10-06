import { FC, useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.scss";

let url =
  'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":316551611,"first":6}';

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
