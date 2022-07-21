/** @format */

// Dom Manipulation

// //GetElementById()
// const title = document.getElementById("main-heading");
// // console.log(title);
// //GetElementByClassName()
// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// //GetElementByTagName()
// const listTag = document.getElementsByTagName("li");
// console.log(listTag);
// //querySelector()
// const container = document.querySelector("div");
// console.log(container);
// //querySelectorAll()
// const container = document.querySelectorAll("div");
// console.log("div");

// //styleing Elements
// const title = document.querySelector("#main-heading");
// console.log(title);
// title.style.color = "red";
// console.log(title);

// const listItem = document.querySelectorAll(".list-items");
// for (i = 0; i < listItem.length; i++) {
//   listItem[i].style.fontSize = "5rem";
// }
// console.log(listItem);

//Creating Elements

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
//Adding Elements
// ul.append(li);
// Modifying the text

// const firsListItem = document.querySelector(".list-items");
// console.log(firsListItem.innerText);
// console.log(firsListItem.textContent);
// console.log(firsListItem.innerHTML);

// li.innerText = "X-men";

// Modifying Attributes & Classes

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// const title = document.querySelector("#main-heading");
// console.log(title.getAttribute("id"));

// li.classList.add("list-items");

// console.log(li.classList.contains("list-items"));

//Remove Elements
// li.remove();

// Traverse the Dom

// parent Node Traversal

// let ul = document.querySelector("ul");
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal

// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

// let ul = document.querySelector("ul");
// const div = document.querySelector("div");
// console.log(div.childNodes);

// console.log(ul.previousElementSibling);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
