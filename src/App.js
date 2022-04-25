import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/index.css";
import Landing from "./Pages/Landing";

function App() {
  return (
    <>
      <Router>
        <Landing />
      </Router>
    </>
  );
}

export default App;
