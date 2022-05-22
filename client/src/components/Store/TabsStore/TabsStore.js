import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OrdersStore from "./OrdersStore/OrdersStore";
import styles from "./TabsStore.module.scss";
import searchList from "../../../assets/icon/search-list.svg";

const TabsStore = ({search}) => {
  const [selectedTab, setSelectedTab] = React.useState("1");
  const [order, setOrder] = React.useState([]);

  React.useEffect(() => {
    fetch("https://6288f79e10e93797c1611bc6.mockapi.io/order")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setOrder(json);
      });
  }, []);

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
          {order
            .filter((val) => {
              if (search == "") {
                return val;
              } else if (val.number.includes(search)) {
                return val;
              }
            })
            .map((item) => (
              <OrdersStore
                value={item.text}
                date={item.date}
                number={item.number}
              />
            ))}
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}></TabPanel>
      </TabContext>
    </div>
  );
};

export default TabsStore;
