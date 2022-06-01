import React from "react";
import styles from "./OrdersStore.module.scss";
import { Link } from "react-router-dom";

const OrdersStore = ({ text, date, number, from }) => {

  return (
    <Link className={styles.orders} to="/detail">
      <div className={styles.column}>
        <div className={styles.head}>
          <h1>{number}</h1>
          <p className={from ? `${styles.from}` : `${styles.to}`}>{from ? 'To me' : 'From'}</p>
        </div>
        <div className={styles.body}>
          <div className={styles.group}>
            <p className={styles.preview}>Arives in</p>
            <p className={styles.value}>{text}</p>
          </div>
          <div className={styles.group}>
            <p className={styles.preview}>Expected to</p>
            <p className={styles.value}>
              <div className={styles.line}>{date}</div>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrdersStore;
