function getHomePage() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.textContent = "Ocean Grown";
    const orderBtn = document.createElement("button");
    orderBtn.textContent = "Take Out";
    orderBtn.classList.add("order-btn");
    content.append(h1, orderBtn);

}

export default getHomePage;