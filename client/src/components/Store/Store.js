import React from "react";
import Search from "../reusable/Search/Search";
import TabsStore from "./TabsStore/TabsStore";
import styles from "./Store.module.scss";

const Store = () => {
  return (
    <div className={styles.store}>
      <Search />
      <TabsStore />
    </div>
  );
};

export default Store;
