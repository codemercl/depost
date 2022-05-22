import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SignIn from "./SignIn/SignIn";
import styles from "./Login.module.scss";

const Login = () => {
  const [selectedTab, setSelectedTab] = React.useState("1");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className={styles.login}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <p>D</p>
        </div>
      </div>
      <div className={styles.loginTabs}>
        <TabContext value={selectedTab}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="tab API tabs exxample"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab label="Log in" value="1"></Tab>
            <Tab label="Sign up" value="2"></Tab>
          </TabList>
          <TabPanel value="1" sx={{ p: 0 }}>
            <SignIn />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            2
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Login;
