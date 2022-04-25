import React from "react";
import About from "./About";
import FavList from "./FavList";
import PokeList from "./PokeList";
import PokeSingle from "./PokeSingle";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pokelist" element={<PokeList />}>
          <Route path="pokesingle" element={<PokeSingle />} />
        </Route>
        <Route path="/favlist" element={<FavList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
