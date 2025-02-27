import "./styles.css";
import "../src/menu.css";
import getHomePage from "./modules/onload";
import getMenu from "./modules/menu";

window.onload = getHomePage;

const menu_btn = document.querySelector("#menu-btn");
menu_btn.addEventListener("click", getMenu);

const home_btn = document.querySelector("#home-btn");
home_btn.addEventListener("click", getHomePage);