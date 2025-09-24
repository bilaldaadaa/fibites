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
  {
    id: 4,
    img: "/assets/img/menu4.jpg",
    name: "tuna and Crackers",
    Protein: "3g of Protein",
    desc: "Tuna and whole Grain Crackes",
    price: "15 $",
    category: "snacks"
  },
  {
    id: 5,
    img: "/assets/img/menu5.jpg",
    name: "Garilled Shirmp ",
    Protein: "30g of Protein",
    desc: "Grailled Shirmp with sweet potato and Asparagus",
    price: "15 $",
    category: "food"
  },
  {
    id: 6,
    img: "/assets/img/menu6.jpg",
    name: "chocolate balls ",
    Protein: "21g of Protein",
    desc: "Proten Energy Balls",
    price: "8 $",
    category: "snacks"
  },
  {
    id: 7,
    img: "/assets/img/menu7.jpg",
    name: " Greek yogurt with nuts",
    Protein: "25g of Protein",
    desc: "creamy greek yogert with walnuts",
    price: "8 $",
    category: "snacks"
  },
  {
    id: 8,
    img: "/assets/img/menu8.jpg",
    name: " strawberry smoothie ",
    Protein: "23g of Protein",
    desc: "drink of strawberry",
    price: "4$",
    category: "drinks"
  },
];

const cards = document.querySelector(".cards");
const all = document.getElementById("all");
const food = document.getElementById("food");
const snacks = document.getElementById("snacks");
const drinks = document.getElementById("drinks");


const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top'
  },
  types: [
    {
      type: 'warning',
      background: 'orange',
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'warning'
      }
    },
    {
      type: 'info',
      background: 'blue',
      icon: false
    }
  ]
});

function filterItems(category) {
  let filtered = category === "all" ? Menu : Menu.filter(item => item.category === category);

  let card = "";
  filtered.forEach(e => {
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


  const addButtons = document.querySelectorAll(".add");
  addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      notyf.success("Item added successfully!");
    });
  });
  const fav = document.querySelectorAll(".fav");
  fav.forEach(btn => {
    btn.addEventListener("click", () => {
      notyf.success("Item added to your favorite!");
    });
  });
}

const sidebar = document.getElementById("sidebar");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
filterItems("all");

