import React from "react";

const Wydarzenie = () => {
  return (
    <form>
      <h3>Wydarzenie</h3>
      <fieldset>
        <legend>Wydarzenie 1</legend>
        <label>Data:</label>
        <input
          id="data-wydarzenia-1"
          name="data-wydzarznia-1"
          type="date"
          value=""
          disabled
        />
        <label>Godzina:</label>
        <input
          id="godzina-wydarzenia-1"
          name="godzina-wydzarznia-1"
          type="time"
          value=""
          disabled
        />
        <label>Lokalizacja:</label>
        <input
          id="lokalizacja-wydarzenia-1"
          name="lokalizacja-wydzarznia-1"
          type="text"
          value="Wrocłąw"
          disabled
        />
        <h4>Opis Wydarzenia</h4>
        <p>Wydarzenie 1 opis</p>
      </fieldset>
      <button type="button">Komentarze</button>
      <button type="button">Dostepne Menu</button>
      <button type="submit">Zapisz się</button>
    </form>
  );
};

export default Wydarzenie;
