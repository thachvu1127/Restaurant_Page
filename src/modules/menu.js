import spicyPeas from "../img/spicy_peas.webp";
import bakedLobster from "../img/baked_lobster.webp";
import bakedMussle from "../img/baked_mussle.jpg";
import bakedSalmon from "../img/baked_salmon.webp";
import sashimi from "../img/sashimi.webp";
import searedTuna from "../img/seared_tuna.png";
const menu_items = [
    {
        name: "Spicy Garlic Edamame",
        desc: "Fresh Edamame covered with special house seasoning",
        price: "$7.00",
        img: spicyPeas
        
    },
    {
        name: "Baked Mussels",
        desc: "Sweet and Flavorful Baked Mussels",
        price: "$12.00",
        img: bakedMussle
    },
    {
        name: "Lobster Roll",
        desc: "18 pieces of assorted sashimi + ebi and tamago",
        price: "$16.00",
        img: bakedLobster
    },
    {
        name: "Ocean 18+",
        desc: "18 pieces of assorted sashimi + ebi and tamago",
        price: "$20.00",
        img: sashimi
    },
    {
        name: "Seared Tuna",
        desc: " Seared Tuna Sashimi with special garlic ponzu sauce topped with fried onion",
        price: "$15.00",
        img: searedTuna
    },
    {
        name: "Salmon Tartare",
        desc: " Salmon Sashimi with special sesame sauce top with black tobiko",
        price: "$22.00",
        img: bakedSalmon
    },

]

function createMenuContainer() {
    const container = document.createElement("div");
    container.classList.add("menu-container");
    return container;

}

function createThumbnail(image_source) {
    const thumbnail_container = document.createElement("div");
    thumbnail_container.classList.add("menu-item-thumbail");
    const img = document.createElement("img");
    img.classList.add("thumbnail-img");
    img.src = image_source;
    thumbnail_container.appendChild(img);
    return thumbnail_container;
}

function createMenuDesc(name, desc) {
    const desc_container = document.createElement("div");
    desc_container.classList.add("menu-item-desc");
    const h5 = document.createElement("h5");
    h5.textContent = name;
    const p = document.createElement("p");
    p.textContent = desc;
    p.classList.add("menu-desc");
    desc_container.append(h5, p);
    return desc_container;
}

function createMenuPrice(price) {
    const price_container = document.createElement("div");
    price_container.classList.add("menu-item-price");
    price_container.textContent = price;
    return price_container;
}

function createMenu() {
    const menu_container = createMenuContainer();
    menu_items.forEach((item) => {
        const menu_item_container = document.createElement("div");
        menu_item_container.classList.add("menu-item");
        const menu_thumbail = createThumbnail(`${item.img}`);
        const menu_desc = createMenuDesc(item.name, item.desc);
        const menu_price = createMenuPrice(item.price);
        menu_item_container.append(menu_thumbail, menu_desc, menu_price);
        menu_container.append(menu_item_container);
    })
    
    return menu_container;
}


function loadMenu() {
    const contentDiv = document.getElementById("content");
   
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    })
 
   
    setTimeout(() => {
        contentDiv.innerHTML = " ";
        const menuElements = createMenu();
        contentDiv.appendChild(menuElements);

        contentDiv.classList.remove('hidden');
    }, 200);
}


export default loadMenu;