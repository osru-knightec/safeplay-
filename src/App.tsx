import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact/Contact";
import { Privacy } from "./pages/Privacy/Privacy";

function RouteList() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
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
