import React from "react";
import ContentLoader from "react-content-loader";

const PlaceHolder = (props) => (
  <ContentLoader
    speed={2}
    width={371}
    height={130}
    viewBox="0 0 371 130"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="1" rx="0" ry="0" width="371" height="140" />
  </ContentLoader>
);

export default PlaceHolder;
