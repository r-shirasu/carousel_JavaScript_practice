"use strict";

const reviews = [
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

const img = document.getElementById("fruits-img");
<<<<<<< HEAD
const fruitsName = document.getElementById("fruits");
const color = document.getElementById("color");
const info = document.getElementById("info");

// ボタン定義
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  fruitsName.textContent = item.fruitsName;
  color.textContent = item.color;
  info.textContent = item.text;
});

// function showFruits()

