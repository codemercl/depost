import React from "react";
import styles from "./Notfound.module.scss";
import { motion } from "framer-motion";

const Notfound = ({ PageTransition }) => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={PageTransition}
      className={styles.navbar}
    >
      Page nor found
    </motion.div>
  );
};

export default Notfound;
