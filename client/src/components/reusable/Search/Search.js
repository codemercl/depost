import React from "react";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.search}>
      <input placeholder="Enter tracking number" type="text" />
    </div>
  );
};

export default Search;
