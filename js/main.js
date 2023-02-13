let ul = document.getElementById("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
li1.innerHTML = "lorem 1";
li2.innerHTML = "lorem 2";
li3.innerHTML = "lorem 3";
li4.innerHTML = "lorem 4";

ul.append(li1, li2, li3, li4);

console.log(ul);
