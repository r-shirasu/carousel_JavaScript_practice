"use strict";

const fruitsImage = document.getElementById("fruits-img");
const fruitsName = document.getElementById("fruits");
const fruitsColor = document.getElementById("color");
const fruitsInfo = document.getElementById("info");

const fruitsMenu = [
  {
    id: 0,
    fruitsName: "Peach",
    color: "Pink",
    img: "./fruits/category_tn_190.jpeg",
    text: "山梨県で多く取れます",
  },
];

let initialItem = 0;

fruitsImage.src = fruitsMenu.img;
fruitsName.textContent = fruitsMenu.fruitsName;
fruitsColor.textContent = fruitsMenu.color;
fruitsInfo.textContent = fruitsMenu.text;

const showFruits = () => {
  const item = fruitsMenu[initialItem];
  fruitsImage.src = item.img;
  fruitsName.textContent = item.fruitsName;
  fruitsColor.textContent = item.color;
  fruitsInfo.textContent = item.text;
};
showFruits();

/**
 * ①HTML要素の情報を取得する
 * ②HTMLタグと配列の情報（画像、名前、色、説明）を結ぶ
 * ③配列0番目の情報の画像、名前、色、説明を表示させる
 */
