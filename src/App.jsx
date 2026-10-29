import React from "react";
import Content from "./Content.jsx";
import GoodsCard from "./GoodsCard.jsx";
const goods = [
  {
    id: "apple",
    name: "Apple",
    price: 15,
    photo: "images/apple.svg",
  },
  {
    id: "pear",
    name: "Pear",
    price: 20,
    photo: "images/pear.svg",
  },
  {
    id: "grape",
    name: "Grape",
    price: 25,
    photo: "images/grape.svg",
  },
  {
    id: "peach",
    name: "Peach",
    price: 18,
    photo: "images/peach.svg",
  },
  {
    id: "cherry",
    name: "Cherry",
    price: 30,
    photo: "images/cherry.svg",
  },
  {
    id: "banana",
    name: "Banana",
    price: 22,
    photo: "images/banana.svg",
  },
];

export default function App() {
  return (
    <main>
      <Content />

      <section className="goods-section" aria-labelledby="goods-heading">
        <h2 id="goods-heading">Галерея товарів</h2>
        <div className="goods-gallery">
          {goods.map((good) => (
            <GoodsCard
              key={good.id}
              photo={good.photo}
              name={good.name}
              price={good.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
