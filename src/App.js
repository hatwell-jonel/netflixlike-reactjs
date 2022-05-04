import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/index.css";
import Landing from "./Pages/Landing";
import SignIn from "./Pages/Login";
import Signup from "./Pages/Login/Signup";
import Dashboard from "./Pages/Dashboard";
import Movie from "./Pages/Dashboard/Movie";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
