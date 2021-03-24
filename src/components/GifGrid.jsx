import React, { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGitfs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  const { data, loading } = useFetchGifs();

  return (
    <>
      <h3>{category}</h3>
      {loading ? "Cargando..." : "Data Cargada"}

      <div className="grid-gifs">
        {images.map((image, i) => (
          <GifGridItem key={i} {...image} />
        ))}
      </div>
    </>
  );
};
