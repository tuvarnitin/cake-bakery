import React from "react";
import Card from "./Card";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap'
const cakes = [
  {
    id: 1,
    name: "Chocolate Delight",
    title: "Rich Chocolate Indulgence",
    price: 299,
    pic: "model/1.jpg",
  },
  {
    id: 2,
    name: "Vanilla Dream",
    title: "Classic Vanilla Cream",
    price: 249,
    pic: "model/2.jpg",
  },
  {
    id: 3,
    name: "Strawberry Swirl",
    title: "Fresh Berry Whirls",
    price: 279,
    pic: "model/3.jpg",
  },
  {
    id: 4,
    name: "Black Forest",
    title: "Choco-Cherry Fantasy",
    price: 319,
    pic: "model/4.avif",
  },
  {
    id: 5,
    name: "Red Velvet",
    title: "Creamy Red Indulgence",
    price: 349,
    pic: "model/5.jpg",
  },
  {
    id: 6,
    name: "Butterscotch Bliss",
    title: "Crunchy Butterscotch Magic",
    price: 269,
    pic: "model/6.jpg",
  },
  {
    id: 7,
    name: "Pineapple Punch",
    title: "Tropical Fruit Zing",
    price: 239,
    pic: "model/7.avif",
  },
  {
    id: 8,
    name: "Oreo Crumble",
    title: "Cookies and Cream Love",
    price: 299,
    pic: "model/8.avif",
  },
  {
    id: 9,
    name: "Mango Magic",
    title: "Summer Mango Delight",
    price: 289,
    pic: "model/9.jpg",
  },
  {
    id: 10,
    name: "Caramel Crunch",
    title: "Golden Caramel Layers",
    price: 309,
    pic: "model/10.jpg",
  },
  {
    id: 11,
    name: "Choco Lava",
    title: "Molten Choco Explosion",
    price: 279,
    pic: "model/11.jpg",
  },
  {
    id: 12,
    name: "Blueberry Burst",
    title: "Burst of Blueberries",
    price: 299,
    pic: "model/12.jpg",
  },
  {
    id: 13,
    name: "Coffee Cream",
    title: "Smooth Coffee Bliss",
    price: 269,
    pic: "model/13.jpg",
  },
  {
    id: 14,
    name: "Kiwi Surprise",
    title: "Zesty Kiwi Layers",
    price: 259,
    pic: "model/14.jpg",
  },
  {
    id: 15,
    name: "Honey Almond",
    title: "Nutty Honey Flavor",
    price: 319,
    pic: "model/15.jpg",
  },
  {
    id: 16,
    name: "Nutty Delight",
    title: "Crunch of Mixed Nuts",
    price: 289,
    pic: "model/16.jpg",
  },
  {
    id: 17,
    name: "Fruit Fiesta",
    title: "Fruity Celebration Cake",
    price: 269,
    pic: "model/17.jpg",
  },
  {
    id: 18,
    name: "Tiramisu Treat",
    title: "Italian Coffee Cream",
    price: 349,
    pic: "model/18.jpg",
  },
  {
    id: 19,
    name: "Rose Pistachio",
    title: "Floral Nutty Bliss",
    price: 299,
    pic: "model/19.jpg",
  },
  {
    id: 20,
    name: "Coconut Cream",
    title: "Creamy Coconut Softness",
    price: 239,
    pic: "model/20.jpg",
  },
];

function CardTab() {

  return (
    <div className="w-full flex items-start justify-center px-10 gap-16 p-14 flex-wrap">
      <Card cakes={cakes} />
    </div>
  );
}

export default CardTab;
