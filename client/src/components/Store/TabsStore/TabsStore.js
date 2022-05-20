import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OrdersStore from "./OrdersStore/OrdersStore";
import styles from "./TabsStore.module.scss";

const TabsStore = () => {
  const [selectedTab, setSelectedTab] = React.useState("1");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className={styles.tabs}>
      <TabContext value={selectedTab}>
        <TabList
          variant="fullWidth"
          textColor="#000"
          onChange={handleChange}
          aria-label="tab API tabs exxample"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Active" value="1"></Tab>
          <Tab label="Archival" value="2"></Tab>
        </TabList>
        <TabPanel value="1" sx={{ p: 0 }}>
          <OrdersStore />
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          <OrdersStore />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default TabsStore;
