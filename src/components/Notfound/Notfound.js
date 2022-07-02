import React from "react";
import styles from "./Notfound.module.scss";
import { motion } from "framer-motion";
import notFound from "../../assets/icon/notFound.svg";

const Notfound = ({ PageTransition }) => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={PageTransition}
      className={styles.navbar}
    >
      <div className={styles.noData}>
        <div className={styles.noDataMiddle}>
          <img src={notFound}></img>
          <p className={styles.searchList}>Page not found</p>
          <p className={styles.searchText}>
            the page has not yet been created or is under development
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Notfound;
