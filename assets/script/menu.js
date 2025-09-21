const Menu = [
    {
        id: 1,
        img: "/assets/img/img1_menu.jpg",
        name: "Beef stir-fry ",
        Protein: "30g of Protein",
        desc: "A quick-cooked dish usually made with thinly sliced beef, a mix of colorful vegetables, garlic, ginger, soy sauce, and a small amount of oil",
        price: '150 $',
        
    },


]

const cards = document.querySelector(".cards")

Menu.forEach(e => {
    cards.innerHTML += ` <div class="card">
          <div class="proten">${e.Protein}</div>
          <img src="${e.img}" alt="" />
          <div class="content">
          <p>${e.desc}</p>
          <p class="price">Price:${e.price}</p>
          </div>
          <div class="btn">
            <button>Add to cart</button>
            <button>more details</button>
            <span><i class="fa-solid fa-heart"></i></span>
          </div>
        </div>`
})