import React from "react";
import { useFetchGifs } from "../hooks/useFetchGitfs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && "Loading..."}

      <div className="grid-gifs">
        {images.map((image, i) => (
          <GifGridItem key={i} {...image} />
        ))}
      </div>
    </>
  );
};
