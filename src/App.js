import "./App.scss";
import Store from "./components/Store/Store";
import Notfound from "./components/Notfound/Notfound";
import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./hook/PageTransition"

function App() {
  return (
    <div className="mobile">
      <AnimatePresence>
        <Routes>
        <Route exact path="/" element={<Login PageTransition={PageTransition}/>} />
          <Route element={<Layout />}>
            <Route exact path="/store" element={<Store PageTransition={PageTransition} />} />
            <Route exact path="*" element={<Notfound PageTransition={PageTransition} />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
