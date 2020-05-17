import React, { useState } from "react";
import "./index.css";
export default function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const search = () => {
    console.log(inputValue);
  };

  const getInputValue = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Ingresar un nombre"
        onChange={(e) => {
          getInputValue(e);
        }}
      ></input>
      <button onClick={search}> Buscar</button>
    </div>
  );
}
