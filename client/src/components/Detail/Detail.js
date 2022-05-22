import React from "react";
import styles from "./Detail.module.scss";
import circle from "../../assets/icon/circle.svg";
import car from "../../assets/icon/car.svg";
import { motion } from "framer-motion";

const Detail = ({ PageTransition }) => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={PageTransition}
      className={styles.detail}
    >
      <div className={styles.id}>
        <p>20 2020 2020</p>
        <button>Copy</button>
      </div>
      <div className={styles.status}>
        <p>CLOTHING</p>
      </div>
      <div className={styles.forwarding}>
        <div className={styles.head}>
          <p className={styles.subtitle}>Status</p>
          <div className={styles.marker}>To me</div>
        </div>
        <div className={styles.body}>
          <div className={styles.item}>
            <img src={circle} alt={circle} />
            <p>75452, NY, USA</p>
          </div>
          <div className={styles.item}>
            <img src={car} alt={car} />
            <p>75452, NY, USA</p>
          </div>
        </div>
      </div>
      <div className={styles.parcel}>
        <p className={styles.subtitle}>Parcel</p>
        <div className={styles.parcelWrapper}>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>W</p>
            <p className={styles.sentese}>10kg</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>H</p>
            <p className={styles.sentese}>10kg</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>L</p>
            <p className={styles.sentese}>10kg</p>
          </div>
          <div className={styles.parameter}>
            <p className={styles.subtitle}>W</p>
            <p className={styles.sentese}>10kg</p>
          </div>
        </div>
      </div>
      <div className={styles.delivery}>
        <div className={styles.deliveryText}>
          <p className={styles.subtitle}>Delivery address</p>
          <p className={styles.deliveryTitle}>
            Repulic France Rue de Ciligmnet, 75932, Paris 18
          </p>
        </div>
        <button>Copy</button>
      </div>
      <div className={styles.sender}>
        <p className={styles.subtitle}>Sender</p>
        <p className={styles.senderTitle}>Paul Mayer</p>
        <p className={styles.senderPhone}>+49 73 743 73 73</p>
      </div>
      <div className={styles.package}>
        <p className={styles.subtitle}>Package contents</p>
        <div className={styles.packageButton}>
          <button>Parcel</button>
          <button>Document</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
