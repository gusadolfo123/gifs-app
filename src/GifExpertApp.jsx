import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "X Japan"];
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "X Japan",
  ]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Nuevo"]);
  //   };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      {categories.map((category, i) => (
        <GifGrid key={i} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
