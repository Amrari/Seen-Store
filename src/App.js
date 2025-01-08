import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import SignIn from "./pages/Sign-In/sign-In";
import StoreProfile from "./pages/Store-Profile/store-profile";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilteredMonsters(filteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSearchChange={onSearchChange}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                filteredMonsters={filteredMonsters}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/StoreProfile" element={<StoreProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
