
function getHomePage() {
    const h1 = document.createElement("h1");
    h1.textContent = "Ocean Grown";
    h1.style.color = "white";
    h1.style.textAlign = "center";
    const orderBtn = document.createElement("button");
    orderBtn.textContent = "Take Out";
    orderBtn.classList.add("order-btn");
    const home_container = document.createElement("div");
    home_container.classList.add("home");
    home_container.append(h1, orderBtn);
    return home_container;
}

function loadHome() {
    const contentDiv = document.getElementById("content");
   contentDiv.classList.add('hidden');

   document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.remove('active');
   })
   document.getElementById('home-btn').classList.add('active');
   

   setTimeout(() => {
      contentDiv.innerHTML = "";

      const homeElements = getHomePage();

      contentDiv.appendChild(homeElements)
      contentDiv.classList.remove('hidden');
   }, 200);
}


export default loadHome;