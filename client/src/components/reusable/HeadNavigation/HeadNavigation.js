import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/icon/arrow-icon.svg";
import styles from "./HeadNavigation.module.scss";

const HeadNavigation = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  return (
    <div className={styles.head}>
      <button onClick={goBack}>
        <img src={arrow} alt="arrow" />
      </button>
      <p>Parcel information</p>
    </div>
  );
};

export default HeadNavigation;
