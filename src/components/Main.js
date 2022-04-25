import React from "react";
import About from "./About";
import FavList from "./FavList";
import PokeList from "./PokeList";
import Home from "./Home";
const Main = () => {
  return (
    <main>
      <Home />
      <FavList />
      <PokeList />
      <About />
    </main>
  );
};

export default Main;
