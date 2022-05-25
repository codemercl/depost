import React from "react";
import styles from "./OrdersStore.module.scss";
import { Link } from "react-router-dom";

const OrdersStore = ({ text, date, number }) => {
  return (
    <Link className={styles.orders} to="/detail">
      <div className={styles.column}>
        <div className={styles.head}>
          <h1>{number}</h1>
          <p className={styles.from}>To me</p>
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
      {/* <div className={styles.column}>
          <div className={styles.head}>
            <h1>20 2020 2020</h1>
            <p className={styles.from}>To me</p>
          </div>
          <div className={styles.body}>
            <div className={styles.group}>
              <p className={styles.preview}>Arives in</p>
              <p className={styles.value}>Paris, FR</p>
            </div>
            <div className={styles.group}>
              <p className={styles.preview}>Expected to</p>
              <p className={styles.value}>
                <div className={styles.line}>NOV 12th | 4 pm to 7pm</div>
              </p>
            </div>
          </div>
        </div> */}
    </Link>
  );
};

export default OrdersStore;
