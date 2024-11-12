import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header.component';
import CardList from '../../components/card-list/card-list.component';
import Label from '../../components/stores-logo.component/Label.component';

const Home = ({ isHovered, setIsHovered }) => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchField, setSearchField] = useState(''); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
        setFilteredMonsters(users); 
      });
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilteredMonsters(filtered);
  }, [searchField, monsters]); 

  const onSearchChange = (event) => {
    setSearchField(event.target.value); 
  };

  return (
    <div className="home">
      <Header
        className="search-box"
        onChangeHandler={onSearchChange}
        onSearchChange={onSearchChange}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        filteredMonsters={filteredMonsters}
        placeholder="search"
      />
      <Label />
      <div
        className={`dripple-container ${isHovered ? "paused" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default Home;