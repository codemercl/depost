import React from "react";
import Search from "../reusable/Search/Search";
import TabsStore from "./TabsStore/TabsStore";

const Store = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div>
      <Search setSearch={setSearch} />
      <TabsStore search={search} />
    </div>
  );
};

export default Store;
