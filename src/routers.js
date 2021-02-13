import React from "react";
import Pages from "./pages";

const { Aktualnosci, MojeZamowienia, MojProfil, NaszeMenu } = Pages;

const Routers = {
  "/": () => {
    return <Aktualnosci />;
  },
  "/moje-zamowienia": () => {
    return <MojeZamowienia />;
  },
  "/moj-profil": () => {
    return <MojProfil />;
  },
  "/nasze-menu": () => {
    return <NaszeMenu />;
  }
};
export default Routers;
