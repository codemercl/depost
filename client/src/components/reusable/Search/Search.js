import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch }) => {
  return (
    <div className={styles.search}>
      <input
        placeholder="Enter tracking number"
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
