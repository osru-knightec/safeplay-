import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Privacy } from "./pages/Privacy/Privacy";

function RouteList() {
  return (
    <Routes>
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/" element={<Privacy />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter basename="/safeplayplus">
      <RouteList />
    </BrowserRouter>
  );
}

export default App;
