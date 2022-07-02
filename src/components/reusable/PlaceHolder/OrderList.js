import React from "react";
import ContentLoader from "react-content-loader";

const PlaceHolder = (props) => (
  <ContentLoader
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="1" rx="0" ry="0" width={props.width} height={props.height} />
  </ContentLoader>
);

export default PlaceHolder;
