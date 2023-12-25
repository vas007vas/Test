"use strict";

function setStartPagStyle() {
  let wrapper = document.querySelector(".wrapper");

  if (localStorage.getItem("style")) {
    wrapper.dataset.pageStyle = localStorage.getItem("style");
  }
}

window.addEventListener("DOMContentLoaded", setStartPagStyle);
//============================================

const burger = document.querySelector(".menu_icon");
function burgerAction() {
  burger.classList.toggle("active");
  changeMenuVisibility();
}

function changeMenuVisibility() {
  let menuBlock = document.querySelector(".header_menu");
  if (menuBlock) {
    menuBlock.classList.toggle("active");
  }
}

burger.addEventListener("click", burgerAction);

let menu = document.querySelector(".header_menu");

function changeSubmenuVisibility(event) {
  let target = event.target.closest(".droppable");
  let menu = document.querySelector(".header_menu");

  if (!target) {
    for (let item of menu.querySelectorAll(".droppable")) {
      item.classList.remove("active");
    }
    return;
  }

  for (let item of menu.querySelectorAll(".droppable")) {
    if (item !== target) {
      item.classList.remove("active");
    }
  }

  target.classList.toggle("active");
}

function hideSubmenu(event) {
  let target = event.target.closest(".header_menu");

  if (target) {
    return;
  }
  let menu = document.querySelector(".header_menu");

  for (let item of menu.querySelectorAll(".droppable")) {
    item.classList.remove("active");
  }
}

function checkCloseMenu(event) {
  if (event.target.closest("a") && menu.classList.contains("active")) {
    burgerAction();
  }
}

menu.addEventListener("click", changeSubmenuVisibility);
menu.addEventListener("click", checkCloseMenu);
document.addEventListener("click", hideSubmenu);

//PAGE STYLE

const pageStyleBlock = document.querySelector(".page_style_block");

function changePageStyle(event) {
  let target = event.target.closest(".page_style_btn");

  if (!target) {
    return;
  }

  let style = target.dataset.style;
  let wrapper = document.querySelector(".wrapper");
  wrapper.dataset.pageStyle = style;

  localStorage.setItem("style", style);

  console.log(style);
}

pageStyleBlock.addEventListener("click", changePageStyle);

//SEARCH FORM

let searchBtn = document.querySelector(".search_btn");
let searchForm = document.querySelector(".search_form");

function showSearchLine() {
  let searchBlock = document.querySelector(".search_block");

  if (searchBlock.classList.contains("active")) {
    return;
  }

  searchBlock.classList.add("active");
}

function hideSearchLine() {
  let searchBlock = document.querySelector(".search_block");

  if (!searchBlock.classList.contains("active")) {
    return;
  }

  searchBlock.classList.remove("active");
}

function controlHideSearchLine(event) {
  let searchBlock = document.querySelector(".search_block");

  if (event.target.closest(".search_block")) {
    return;
  }

  if (searchBlock) {
    searchBlock.classList.remove("active");
  }
}

searchBtn.addEventListener("click", showSearchLine);

searchForm.addEventListener("submit", hideSearchLine);

document.addEventListener("click", controlHideSearchLine);
