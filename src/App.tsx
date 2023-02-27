import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Privacy } from "./pages/Privacy/Privacy";

function RouteList() {
  return (
    <Routes>
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

function App() {
  return (
    <HashRouter>
      <RouteList />
    </HashRouter>
  );
}

export default App;
