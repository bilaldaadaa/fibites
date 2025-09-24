const Menu = [
  {
    id: 1,
    img: "/assets/img/menu1.jpg",
    name: "Beef stir-fry",
    Protein: "30g of Protein",
    desc: "Beef with vegetables and soy sauce",
    price: "30 $",
    category: "food"
  },
  {
    id: 2,
    img: "/assets/img/menu2.jpg",
    name: "Salmon",
    Protein: "20g of Protein",
    desc: "Salmon with Brown rice and Spinach",
    price: "20 $",
    category: "food"
  },
  {
    id: 3,
    img: "/assets/img/menu3.jpg",
    name: "Avocado toast with eggs",
    Protein: "12g of Protein",
    desc: "golden toast with a perfectly cooke egg",
    price: "10 $",
    category: "food"
  },
];

const cards = document.querySelector(".cards")

let card = "";
Menu.forEach(e => {
  card += `
        <div class="card">
          <div class="proten">${e.Protein}</div>
          <img src="${e.img}" alt="${e.name}" />
          <div class="content">
            <h4>${e.name}</h4>
            <p>${e.desc}</p>
            <p class="price">Price: ${e.price}</p>
          </div>
          <div class="btn">
            <button class="add" >Add to cart</button>
            <a href="../../detailes.html?id=${e.id}"><button>More details</button></a>
            <span class="fav"><i class="fa-solid fa-heart"></i></span>
          </div>
        </div>`;
});

cards.innerHTML = card;



const showFormBtn = document.createElement("button");
showFormBtn.textContent = "add your fav food"

showFormBtn.style.cssText = `
    background-color: #ff9800;
    padding: 20px;
    width: 160px;
    height: 40px;
    color: black;
    border-radius: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
     cursor: pointer;
`
document.body.appendChild(showFormBtn);


const popup = document.createElement("div");
popup.style.cssText = `
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 30px;
  border-radius: 16px;
  width: 350px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  display: none;
  z-index: 1000;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #ff9800;
`;


popup.innerHTML = `
<h3 style="color:#2e7d32; text-align:center; margin-bottom:20px;">Add Your Favorite Food</h3>
<input type="text" id="popupTitle" placeholder="Name of food" style="width:100%; padding:10px; margin-bottom:15px; border-radius:8px; border:1px solid #ccc;">
<textarea id="popupDesc" placeholder="Describe your food" style="width:100%; padding:10px; margin-bottom:15px; border-radius:8px; border:1px solid #ccc;"></textarea>
<div style="display:flex; justify-content:space-between;">
  <button id="popupAddBtn" style="background-color:#ff9800; color:white; padding:10px 20px; border:none; border-radius:8px; cursor:pointer;">Add</button>
  <button id="popupCloseBtn" style="background-color:#2e7d32; color:white; padding:10px 20px; border:none; border-radius:8px; cursor:pointer;">Close</button>
</div>

`;

document.body.appendChild(popup);

const overlay = document.createElement("div");
overlay.style.cssText = `
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: none;
  z-index: 999;
`;
document.body.appendChild(overlay);


showFormBtn.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.style.display = "block";
});

document.getElementById("popupCloseBtn").addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});


document.getElementById("popupAddBtn").addEventListener("click", () => {
  const title = document.getElementById("popupTitle").value;
  const desc = document.getElementById("popupDesc").value;

  if (title && desc) {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
      <div class="content">
        <h4>${title}</h4>
        <p>${desc}</p>
      </div>
      <div class="btn">
        <button class="add">Add to cart</button>
        <button>More details</button>
        <span class="fav"><i class="fa-solid fa-heart"></i></span>
      </div>
    `;
    cards.appendChild(newCard);
    document.querySelectorAll(".fav").forEach(fav => {
      fav.addEventListener("click", function () {
        this.closest(".card").remove();
      });
    });
    document.getElementById("popupTitle").value = "";
    document.getElementById("popupDesc").value = "";
    popup.style.display = "none";
    overlay.style.display = "none";
  }
});

document.querySelectorAll(".fav").forEach(fav => {
  fav.addEventListener("click", function () {
    this.closest(".card").remove();
  });
});

const sidebar = document.getElementById("sidebar");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});


