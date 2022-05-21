import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeadDefault from "../reusable/HeadDefault/HeadDefault";
import HeadNavigation from "../reusable/HeadNavigation/HeadNavigation";
import NavBar from "../reusable/NavBar/NavBar";
import styles from "./Layout.module.scss";

const Layout = () => {

  const location = useLocation();
  const nav = location.pathname === '/store';

  return (
    <>
      {nav ? <HeadDefault /> : <HeadNavigation />}
      <div className={styles.layout}>
        <Outlet />
      </div>
      <NavBar />
    </>
  );
};

export default Layout;
