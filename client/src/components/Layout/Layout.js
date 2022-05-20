import React from "react";
import { Outlet } from "react-router-dom";
import HeadDefault from "../reusable/HeadDefault/HeadDefault";
import NavBar from "../reusable/NavBar/NavBar";
import styles from "./Layout.module.scss"

const Layout = () => {
  return (
    <>
      <HeadDefault />
      <div className={styles.layout}>
        <Outlet />
      </div>
      <NavBar />
    </>
  );
};

export default Layout;
