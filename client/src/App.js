import "./App.scss";
import Store from "./components/Store/Store";
import Detail from "./components/Detail/Detail";
import Notfound from "./components/Notfound/Notfound";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// import { PageTransition } from "./hook/PageTransition"

function App() {
  return (
    <div className="mobile">
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/detail" element={<Detail />} />
            <Route exact path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
