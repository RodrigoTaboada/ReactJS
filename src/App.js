import React from "react";
import "./App.css";
import Navbar from "./componentes/NavBar/NavBar";
import ItemListContainer from "../src/componentes/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer message='Bienvenido a Phietas tu local de tecnologia.' name='amigo!' />  
    </>
  );
}

export default App;
