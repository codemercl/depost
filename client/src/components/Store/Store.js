import React from "react";
import Search from "../reusable/Search/Search";
import TabsStore from "./TabsStore/TabsStore";
import { motion } from "framer-motion";

const Store = ({ PageTransition }) => {

  const [search, setSearch] = React.useState("");
  
  return (
    <motion.div initial="out" animate="in" exit="out" variants={PageTransition}>
      <Search setSearch={setSearch} />
      <TabsStore search={search} />
    </motion.div>
  );
};

export default Store;
