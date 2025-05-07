import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
//import Home1 from "./components/Home1";
import Home from "./pages/Home1";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;