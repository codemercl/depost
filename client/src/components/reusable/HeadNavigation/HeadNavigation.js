import React from "react";
import arrow from "../../../assets/icon/arrow-icon.svg";
import styles from "./HeadNavigation.module.scss";
import { Link } from "react-router-dom";

const HeadNavigation = () => {
  return (
    <div className={styles.head}>
      <Link to="/">
        <img src={arrow} alt="arrow" />
      </Link>
      <p>Parcel information</p>
    </div>
  );
};

export default HeadNavigation;
