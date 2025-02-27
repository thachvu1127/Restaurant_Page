import spicyPeas from "../img/spicy_peas.webp";
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
        img: spicyPeas
    },
    {
        name: "Lobster Roll",
        desc: "In: California roll // Topp: baked crawfish with masago & green onion",
        price: "$16.00",
        img: spicyPeas
    },
    {
        name: "Ocean 18+",
        desc: "18 pieces of assorted sashimi + ebi and tamago",
        price: "$20.00",
        img: spicyPeas
    },
    {
        name: "Ocean 18+",
        desc: "18 pieces of assorted sashimi + ebi and tamago",
        price: "$20.00",
        img: spicyPeas
    },
    {
        name: "Ocean 18+",
        desc: "18 pieces of assorted sashimi + ebi and tamago",
        price: "$20.00",
        img: spicyPeas
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
    contentDiv.classList.add('hidden');
   
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    })
    document.getElementById('menu-btn').classList.add('active');

    setTimeout(() => {
        contentDiv.innerHTML = "";
        const menuElements = createMenu();
        contentDiv.appendChild(menuElements);

        contentDiv.classList.remove('hidden');
    }, 200);
}


export default loadMenu;