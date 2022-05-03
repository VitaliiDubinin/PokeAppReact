import React from "react";

import "./App.css";
import Layout from "./pages/Layout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import FavList from "./components/FavList";
import PokeList from "./components/PokeList";
import PokeSingle from "./components/PokeSingle";
import Home from "./components/Home";

import { useParams } from "react-router-dom";

const RouterWrapper = (props) => {
  const params = useParams();
  return <PokeSingle params={params} {...props} />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favlist" element={<FavList />} />
          <Route path="pokelist" element={<PokeList />} />
          <Route path="pokelist/:pokesingle" element={<RouterWrapper />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
