import "./App.scss";
import Store from "./components/Store/Store";
import Notfound from "./components/Notfound/Notfound";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mobile">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/store" element={<Store />} />
          <Route exact path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
