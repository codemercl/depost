import React from "react";
import styles from "./Navbar.module.scss";
import store from "../../../assets/navigation/store-icon.svg";
import settings from "../../../assets/navigation/settings.icon.svg";
import folder from "../../../assets/navigation/folder-icon.svg";
import box from "../../../assets/navigation/box-icon.svg";
import CustomLink from "../CustomLink/CustomLink";

const NavBar = () => {

  return (
    <div className={styles.navbar}>
      <CustomLink to="/store">
        <img src={store}></img>
      </CustomLink>
      <CustomLink to="/box">
        <img src={box}></img>
      </CustomLink>
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
