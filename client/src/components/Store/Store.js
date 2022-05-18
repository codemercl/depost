import React from "react";
import styles from "./Store.module.scss";
import HeadDefault from "../reusable/HeadDefault/HeadDefault";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const Store = () => {
  const [selectedTab, setSelectedTab] = React.useState("1");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <HeadDefault></HeadDefault>
      <div className={styles.search}>
        <input placeholder="Enter tracking number" type="text" />
      </div>
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
          <TabPanel value="1">Item one</TabPanel>
          <TabPanel value="2">Item two</TabPanel>
        </TabContext>
      </div>
    </>
  );
};

export default Store;
