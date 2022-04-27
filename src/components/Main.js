import React from "react";
import About from "./About";
import FavList from "./FavList";
import PokeList from "./PokeList";
import PokeSingle from "./PokeSingle";
import Home from "./Home";
import { Routes, Route, Outlet } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;
