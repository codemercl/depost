import React from "react";
import styles from "./Navbar.module.scss";
import store from "../../../assets/navigation/store-icon.svg";
import shipment from "../../../assets/navigation/shipment-icon.svg";
import settings from "../../../assets/navigation/settings.icon.svg";
import folder from "../../../assets/navigation/folder-icon.svg";
import box from "../../../assets/navigation/box-icon.svg";
import CustomLink from "../CustomLink/CustomLink";

import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const done = location.pathname === "/detail";

  return (
    <div className={styles.navbar}>
      <CustomLink to="/store">
        <img src={store}></img>
      </CustomLink>
      <CustomLink to="/box">
        <img src={box}></img>
      </CustomLink>
      <div className={styles.shipment}>
        <CustomLink to="/shipment">
          <img src={shipment}></img>
        </CustomLink>
      </div>
      <CustomLink to="/settings">
        <img src={settings}></img>
      </CustomLink>
      <CustomLink to="/folder">
        <img src={folder}></img>
      </CustomLink>
    </div>
  );
};

export default NavBar;
