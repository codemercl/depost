import React from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./CustomLink.module.scss";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <div className={styles.customlink}>
      <Link
        to={to}
        style={{
          opacity: match ? "1" : ".2",
        }}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
