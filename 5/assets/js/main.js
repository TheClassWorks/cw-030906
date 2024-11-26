let ulElem = document.querySelector(".test");

let newLi = document.createElement("li");
newLi.innerText = "محصولات";

ulElem.append(newLi);

ulElem.setAttribute("class","text-danger")