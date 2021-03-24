import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img src={url} width="200" alt={title}></img>
      <a href={url} target="_blank" rel="noreferrer">
        <p className="card-title">{title}</p>
      </a>
    </div>
  );
};
