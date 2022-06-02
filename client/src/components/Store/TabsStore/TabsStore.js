import React from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OrdersStore from "./OrdersStore/OrdersStore";
import OrderList from "../../reusable/PlaceHolder/OrderList";
import styles from "./TabsStore.module.scss";
import searchIcon from "../../../assets/icon/search-list.svg";

const TabsStore = ({ search }) => {
  const [selectedTab, setSelectedTab] = React.useState("1");
  const [order, setOrder] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://6288f79e10e93797c1611bc6.mockapi.io/order")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setOrder(json);
        setIsLoading(false);
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
          onChange={handleChange}
          aria-label="tab API tabs exxample"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Active" value="1"></Tab>
          <Tab label="Archival" value="2"></Tab>
        </TabList>
        <TabPanel value="1" sx={{ p: 0 }}>
          {isLoading
            ? [...new Array(4)].map((_, index) => (
                <OrderList
                  width="371px"
                  height="130px"
                  style={{ marginTop: "10px" }}
                  key={index}
                />
              ))
            : order
                .filter((val) => {
                  if (search == "") {
                    return val;
                  } else if (val.number.includes(search)) {
                    return val;
                  }
                })
                .map((item, index) => <OrdersStore key={index} {...item} />)}
          {order <= 0 && (
            <div className={styles.noData}>
              <div className={styles.noDataMiddle}>
                <img src={searchIcon} alt="search-icon"></img>
                <p className={styles.searchList}>
                  You don't have any packages yet
                </p>
                <p className={styles.searchText}>
                  when the parcel reaches the warehouse you will get access to
                  the management
                </p>
              </div>
            </div>
          )}
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}></TabPanel>
      </TabContext>
    </div>
  );
};

export default TabsStore;
