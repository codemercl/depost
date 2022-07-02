import React from "react";
import styles from "./OrdersStore.module.scss";

import { Link } from "react-router-dom";

const OrdersStore = ({from }) => {

  return (
    <div className={styles.orders}>
      <div className={styles.column}>
        <div className={styles.head}>
          <h1>20 2020 2022</h1>
          <p className={from ? `${styles.from}` : `${styles.to}`}>{from ? 'from me' : 'to me'}</p>
        </div>
        <div className={styles.body}>
          <div className={styles.group}>
            <p className={styles.preview}>Arives in</p>
            <p className={styles.value}>June 11, 2022 5:34 PM</p>
          </div>
          <div className={styles.group}>
            <p className={styles.preview}>Current state</p>
            <p className={styles.value}>
              <div className={styles.line}>Stored packed</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersStore;
