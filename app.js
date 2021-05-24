"use strict";

const reviwes = [
  {
    id: 1,
    fruitsName: "Chery",
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
const fruitsName = document.getElementById("fruits");
const color = document.getElementById("color");
const info = document.getElementById("info");

// ボタン定義
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 1;

// load initial item
window.addEventListener("DOMContentLaded", function () {
  const item = reviwes[currentItem];
  img.src = item.img;
});
