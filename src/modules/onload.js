
function getHomePage() {
    const h1 = document.createElement("h1");
    h1.textContent = "Ocean Grown";
    const orderBtn = document.createElement("button");
    orderBtn.textContent = "Take Out";
    orderBtn.classList.add("order-btn");
    const home_container = document.createElement("div");
    home_container.append(h1, orderBtn);
    return home_container;
}

function loadHome() {
    const contentDiv = document.getElementById("content");
    contentDiv.classList.add("hidden");

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove('active');
    })
    document.getElementById("home-btn").classList.add("active");

    setTimeout(() => {
       contentDiv.innerHTML = "";
       const homeElement = getHomePage();
       contentDiv.appendChild(homeElement);
       contentDiv.classList.remove("hidden");
    }, 200);
}


export default loadHome;