import React from "react";
import styles from "./HeadDefault.module.scss";
import notification from "../../../assets/icon/notification-icon.svg";
import profile from "../../../assets/icon/profile-icon.svg";
import { Link } from "react-router-dom";

const HeadDefault = () => {
  return (
    <div className={styles.head}>
      <Link to="/notification">
        <img src={notification}></img>
      </Link>
      <Link to="/profile">
        <img src={profile}></img>
      </Link>
    </div>
  );
};

export default HeadDefault;
