import React, {useState, setState} from "react";
import styles from "./Detail.module.scss";
import circle from "../../assets/icon/circle.svg";
import car from "../../assets/icon/car.svg";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
import img1 from "../../assets/navigation/store-icon.svg";

const Detail = ({ PageTransition }) => {
  const [detail, setDetail] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6288f79e10e93797c1611bc6.mockapi.io/detail")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setDetail(json);
      });
  }, []);

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {detail.map((item, index) => (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={PageTransition}
          className={styles.detail}
          key={index}
        >
          <div className={styles.id}>
            <p>{item.number}</p>
            <button>Copy</button>
          </div>
          <div className={styles.status}>
            <p>{item.status}</p>
          </div>
          <div className={styles.forwarding}>
            <div className={styles.head}>
              <p className={styles.subtitle}>Status</p>
              <div className={styles.marker}>{item.from}</div>
            </div>
            <div className={styles.body}>
              <div className={styles.item}>
                <img src={circle} alt={circle} />
                <p>{item.addressOne}</p>
              </div>
              <div className={styles.item}>
                <img src={car} alt={car} />
                <p>{item.addressTwo}</p>
              </div>
            </div>
          </div>
          <div className={styles.parcel}>
            <p className={styles.subtitle}>Parcel</p>
            <div className={styles.parcelWrapper}>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>W</p>
                <p className={styles.sentese}>{item.weight}</p>
              </div>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>H</p>
                <p className={styles.sentese}>{item.height}</p>
              </div>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>L</p>
                <p className={styles.sentese}>{item.lenght}</p>
              </div>
              <div className={styles.parameter}>
                <p className={styles.subtitle}>W</p>
                <p className={styles.sentese}>{item.width}</p>
              </div>
            </div>
          </div>
          <div className={styles.delivery}>
            <div className={styles.deliveryText}>
              <p className={styles.subtitle}>Delivery address</p>
              <p className={styles.deliveryTitle}>{item.fullStreet}</p>
            </div>
            <button>Copy</button>
          </div>
          <div className={styles.sender}>
            <p className={styles.subtitle}>Sender</p>
            <p className={styles.senderTitle}>{item.sender}</p>
            <p className={styles.senderPhone}>{item.phone}</p>
          </div>
          <div className={styles.package}>
            <p className={styles.subtitle}>Package contents</p>
            <div className={styles.packageButton}>
              <button onClick={() => setModalActive(true)}>Parcel</button>
              <button>Document</button>
              <Modal active={modalActive} setActive={setModalActive}>
                <img src={img1} alt="img" />
              </Modal>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Detail;
