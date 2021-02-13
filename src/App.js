import React from "react";
import { useRoutes } from "hookrouter";
import "./style.css";
import Routers from "./routers";

export default function App() {
  const routeResult = useRoutes(Routers);
  return (
    <>
      {routeResult}
    </>
  );
}
