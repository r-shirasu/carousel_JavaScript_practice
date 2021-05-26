"use strict";

const img = document.getElementById("fruits-img");
const fruitsName = document.getElementById("fruits");
const fruitsColor = document.getElementById("color");
const fruitsInfomation = document.getElementById("info");

const fruitsMenu = [
  {
    id: 0,
    fruitsName: "Peach",
    color: "Pink",
    img: "./fruits/category_tn_190.jpeg",
    text: "山梨県で多く取れます",
  },
  {
    id: 1,
    fruitsName: "Cherry",
    color: "Red",
    img: "./fruits/category_tn_192.jpeg",
    text: "山形県で多く取れます",
  },
  {
    id: 2,
    fruitsName: "Apple",
    color: "Red",
    img: "./fruits/category_tn_193.jpeg",
    text: "青森県で多く取れます",
  },
  {
    id: 3,
    fruitsName: "Grape",
    color: "Purple",
    img: "./fruits/category_tn_195.jpeg",
    text: "山梨で多く取れます",
  },
  {
    id: 4,
    fruitsName: "Banana",
    color: "Yellow",
    img: "./fruits/category_tn_197.jpeg",
    text: "朝食にぴったりです",
  },
];

let initialId = 0;

const showFruits = () => {
  const fruitsItem = fruitsMenu[initialId];
  img.src = fruitsItem.img;
  fruitsName.textContent = fruitsItem.ruitsName;
  fruitsColor.textContent = fruitsItem.color;
  fruitsInfomation.textContent = fruitsItem.text;
};
showFruits();

// >ボタンを定義する
const nextButton = document.querySelector(".next-btn");
nextButton.addEventListener("click", () => {
  initialId++;
  if (initialId > fruitsMenu.length - 1) {
    initialId = 0;
  }
  showFruits();
});

// >ボタンを定義する
const prevButton = document.querySelector(".prev-btn");
prevButton.addEventListener("click", () => {
  initialId--;
  if (initialId < 0) {
    initialId = fruitsMenu.length - 1;
  }
  showFruits();
});

const randomButton = document.querySelector(".random-btn");
randomButton.addEventListener("click", () => {
  initialId = Math.floor(Math.random() * fruitsMenu.length);
  showFruits();
});
