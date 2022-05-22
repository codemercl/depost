import React from "react";
import styles from "./SignIn.module.scss";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.head}>
        <div className={styles.column}>
          <input placeholder="Email / Phone number" type="text" />
          <input placeholder="Password / Phone number" type="text" />
        </div>
        <div className={styles.panel}>
          <div className={styles.remember}>
            <input type="checkbox" name="box" id="box" />
            <p>Remember me</p>
          </div>
          <a href="#" className={styles.forgot}>
            Forgot password
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
        <button>Log in</button>
        <p>
          By continum you agree to <a href="#">Terms of Use</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
