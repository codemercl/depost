import "./App.scss";
import Store from "./components/Store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="mobile">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
