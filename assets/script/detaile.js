const params = new URLSearchParams(window.location.search);
const pageId = params.get("id");
const contentDiv = document.getElementById("container");

const detailes = [{
  id: 1,
  name: "Beef Stir-Fry with Vegtables and rice",
  description: "Savory and colorful. Lean beef stir-fried with vibrant vegetables and served with rice for a filling, flavorful dinner",
  images: ['/assets/img/Beef.jpg', '/assets/img/rice.jpg', '/assets/img/lean.jpg', '/assets/img/veg.jpg']
},
{
  id: 2,
  name: "Salmon with Brown rice and Spinach",
  description: "Rich in omega-3s and flavor. Tender salmon with hearty brown rice and fresh spinach for a nutritious and satisfying plate",
  images: ['/assets/img/salmon.jpg', '/assets/img/brice.jpg', '/assets/img/salmonno.jpg', '/assets/img/spinach.jpg']
},
{
  id: 3,
  name: "Avocado Toast with Eggs",
  description: "Golden toasted bread layered with creamy avocado and topped with a perfectly cooked egg. A balanced meal rich in healthy fats and protein",
  images: ['/assets/img/eggtoast.jpg', '/assets/img/eggs.jpg', '/assets/img/toast.jpg', '/assets/img/avoca.jpg']
},
{
  id: 4,

  name: "Tuna and whole Grain Crackers",
  description: "A savory, high-protein option. Lean tuna served with crunchy whole grain crackers for a filling bite",
  images: ['/assets/img/tunameal.jpg', '/assets/img/tuna.jpg', '/assets/img/crack.jpg']
},
{
  id: 5,
  name: "Garilled Shirmp with sweet potato and Asparagus",
  description: "Light and refreshing. Grilled shrimp with roasted sweet potato and crisp asparagus, perfect for a protein-packed evening meal",
  images: ['/assets/img/shrimpmeal.jpg', '/assets/img/shrimp.jpg', '/assets/img/asparagus.jpg', '/assets/img/sweetpotato.jpg']
},
{
  id: 6,
  name: "Protein Energy Balls",
  description: "Chewy and satisfying. A mix of oats, peanut butter, and protein powder for a quick energy boost anytime",
  images: ['/assets/img/proballs.jpg', '/assets/img/peanut.jpg', '/assets/img/oats.jpg', '/assets/img/protein.jpg']
},
{
  id: 7,
  name: "Greek yogurt with nuts",
  description: "Creamy Greek yogurt topped with crunchy almonds and walnuts — a protein-packed, wholesome snack",
  images: ['/assets/img/greekmeal.jpg', '/assets/img/greekyogurt.jpg']
},
{
  id: 8,
  name: "Strawberry Smoothie",
  description: "A creamy and fruity mix packed with vitamins, fiber, and natural sweetness.",
  images: ['/assets/img/drink.jpg']
},

]


const product = detailes.find((items) => items.id == pageId)
if (product) {
  contentDiv.innerHTML = `<div class="left"> 
    <img src="${product.images[0]}" alt="صورة الطبق" class="main-img" id="mainImage">
        <div class="thumbnails">
        ${product.images.map(img => {
    `<img src=${img} onclick="changeImage(this)">`
  }).join("")
    }
        </div>
    </div>
    <div class="right">
      <div class="title">${product.name}</div>

      <div class="desc-box">
        <p>${product.description}</p>
        <div class="bars">
          <div class="bar">
            <label>Protein</label>
            <progress value="60" max="100"></progress>
          </div>
          <div class="bar">
            <label>Carbs</label>
            <progress value="40" max="100"></progress>
          </div>
<div class="bar">
            <label>Fats</label>
            <progress value="30" max="100"></progress>
          </div>
        </div>
        
      </div>

      <h3>Ingredients</h3>
      <div class="ingredients">
        ${product.images
      .map((img) => `<img src="${img}"  alt="مكون">`)
      .join("")}
      </div>

      <div class="buttons">
        <button class="add">Add to cart</button>
        <button class="fav">❤ Add to my Favorite</button>
      </div>
    </div>

    `
} else {
  contentDiv.innerHTML = "The Page isn't Available";
}


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

const addButtons = document.querySelectorAll(".add");
console.log(addButtons)
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






const sidebar = document.getElementById("sidebar");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});