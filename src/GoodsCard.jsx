import React from "react";

export default function GoodsCard({ photo, name, price }) {
  return (
    <article className="goods-card">
      <img
        src={`${import.meta.env.BASE_URL}${photo}`}
        alt={name}
        width="150"
        height="150"
      />
      <h3>{name}</h3>
      <p>Cost: {price} грн</p>
    </article>
  );
}
