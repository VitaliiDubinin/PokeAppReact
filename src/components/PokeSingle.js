import React from "react";
import { Link, Outlet } from "react-router-dom";

const PokeSingle = () => {
  return (
    <div>
      Alone PokeMon should be here
      <Link to="/pokesingle">Show me single pokemon</Link>
      <Outlet />
    </div>
  );
};

export default PokeSingle;
