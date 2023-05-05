import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Landing from "./Pages/Landing/Landing";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import Loading from "./Pages/Loading/Loading";
import Recipes from "./Pages/Recipes/Recipes";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate a 3 second delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoaded(true);
      // }, 3000);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {!loaded && <Loading />}
      {loaded && (
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
