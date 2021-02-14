import React from "react";

const Filtrowanie = () => {
  return (
    <form>
      <h3>Filtrowanie:</h3>
      <fieldset>
        <legend>Wybierz filtry:</legend>
        <select name="fitr-dania" id="filtr-dania">
          <option value="">--wybierz z listy--</option>
          <option value="Owoce">Owoce</option>
          <option value="Owoce Morza">Owoce Morza</option>
          <option value="Mięso">Mięso</option>
          <option value="Ryby"> Ryby</option>
        </select>
        <button type="button">Filtruj</button>
      </fieldset>
    </form>
  );
};

export default Filtrowanie;
