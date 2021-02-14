import React from "react";
import Wydarzenie from "./Wydarzenie";
import Filtrowanie from "./Filtrowanie";

const Wydarzenia = props => {
  return (
    <section className="Wydarzenia">
      <h2>Wydarzenia:</h2>
      <Filtrowanie />
      <Wydarzenie />
      <Wydarzenie />
      <Wydarzenie />
    </section>
  );
};

export default Wydarzenia;
