var newCatArray = [
  {name: "Name: Tom",
  favFood: "Favourite food: Jerry",
  url: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/15723477_1178616082214143_92120915568290771_o.jpg?oh=b18aeced23e5b99b704388ab9cbf583a&oe=5A6A9374&dl=1"},

  {name: "Name: Boba",
  favFood: "Favourite food: Sock fluff",
  url: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},

  {name: "Name: Barnaby",
  favFood: "Favourite food: Tuna",
  url: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},

  {name: "Name: Max",
  favFood: "Favourite food: Whiskas Temptations",
  url: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}
];

var createCatUL = function() {
  var catUL = document.createElement("ul");
  catUL.classList.add("cat");
  return catUL;
}

var createCatLi1 = function(name) {
  var catLi1 = document.createElement("li");
  catLi1.innerText = name;
  return catLi1;
}

var createCatLi2 = function(favFood) {
  var catLi2 = document.createElement("li");
  catLi2.innerText = favFood;
  return catLi2;
}

var createCatLi3 = function() {
  var catLi3 = document.createElement("li");
  return catLi3;
}

var createCatImg = function(url) {
  var catImg = document.createElement("img");
  catImg.src = url;
  catImg.classList.add("image");
  return catImg;
}

var appendElements = function(cats, catUL, catLi1, catLi2, catLi3, catImg) {
  catUL.appendChild(catLi1);
  catUL.appendChild(catLi2);
  catUL.appendChild(catLi3);
  catLi3.appendChild(catImg);
  cats.appendChild(catUL);
}

var addCat = function(name, favFood, url) {
  var catUL = createCatUL();
  var catLi1 = createCatLi1(name);
  var catLi2 = createCatLi2(favFood);
  var catLi3 = createCatLi3();
  var catImg = createCatImg(url);
  var cats = document.querySelector("section#cats");
  appendElements(cats, catUL, catLi1, catLi2, catLi3, catImg);
}

var app = function() {
  for (var cat of newCatArray) {
    addCat(cat.name, cat.favFood, cat.url);
  }
}

window.addEventListener("DOMContentLoaded", app)
