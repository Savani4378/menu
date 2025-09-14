const menu = [
  {
    category: "Kathiyawadi Starter",
    items: [
      { name: "Bapu Sp. Vagharelo Rotlo", price: "₹150" },
      { name: "Bajri Rotla ka Churma", price: "₹170" },
      { name: "Bhakhri ka Churma", price: "₹130" },
    ],
  },
  {
    category: "Kathiyawadi Odkar",
    items: [
      { name: "Tuver Totha", price: "₹160" },
      { name: "Aakhi Dungali", price: "₹150" },
      { name: "Dungali Ganthiya", price: "₹140" },
      { name: "Kaju Ganthiya / Dudh Kaju Ganthiya", price: "₹150/170" },
      { name: "Vanela Ganthiya", price: "₹140" },
      { name: "Lasan Kali", price: "₹150" },
      { name: "Aakhu Lasan", price: "₹160" },
      { name: "Kaju Lasan", price: "₹170" },
      { name: "Rajwadi Dhokli", price: "₹160" },
      { name: "Varaliyu", price: "₹170" },
      { name: "Dahi Tikhari", price: "₹120" },
      { name: "Lasaniya Bataka", price: "₹160" },
      { name: "Panchratna Dal", price: "₹170" },
      { name: "Sev Masala/Sev Tameta/Sev dungali", price: "₹140" },
      { name: "Bharela Baigan", price: "₹150" },
      { name: "Chavana nu / Sing Bhajiya nu Shak", price: "₹140" },
    ],
  },
  {
    category: "Shiyala Ni Moj",
    items: [
      { name: "Lili Haldar (Ghee)", price: "₹200" },
      { name: "Baigan Bhadatha", price: "₹170" },
      { name: "Green Chana", price: "₹150" },
      { name: "Undhiyu", price: "₹180" },
    ],
  },
  {
    category: "Chula No Kamal",
    items: [
      { name: "Panch Dhan Rotlo", price: "₹65/₹70" },
      { name: "Bajri Rotlo", price: "₹45/₹50" },
      { name: "Makai / Juvar Rotlo", price: "₹55/₹60" },
      { name: "Lasaniyo Rotalo", price: "₹65/₹70" },
      { name: "Bhakhri / Paratha", price: "₹35/₹40" },
      { name: "Rotali", price: "₹22/₹25" },
      { name: "Mathi ka Thepla", price: "₹30" },
    ],
  },
  {
    category: "Jamvani Sathe-Sathe",
    items: [
      { name: "Panch dhan Sadi khichdi", price: "₹120" },
      { name: "Panch dhan masala khichdi", price: "₹150" },
      { name: "Kadhi", price: "₹70" },
      { name: "Rajwadi kadhi", price: "₹100" },
    ],
  },
  {
    category: "Hajma Hajam",
    items: [
      { name: "Milk", price: "₹50" },
      { name: "Butter Milk", price: "₹30" },
      { name: "Dahi ka Ghorava", price: "₹50" },
      { name: "Gud", price: "₹20" },
      { name: "Ghee - Gud", price: "₹40" },
      { name: "Tometo Salad", price: "₹40" },
      { name: "Roasted Papad", price: "₹20" },
      { name: "Roasted Masala Papad", price: "₹40" },
      { name: "Water Bottle / Cold Drinks", price: "MRP" },
    ],
  },
];

const categories = ["All", ...menu.map(c => c.category)];
const buttonsContainer = document.getElementById("categoryButtons");
const menuGrid = document.getElementById("menuGrid");
let selectedCategory = "All";

function renderButtons() {
  buttonsContainer.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    if (cat === selectedCategory) btn.classList.add("active");
    btn.onclick = () => {
      selectedCategory = cat;
      renderButtons();
      renderMenu();
    };
    buttonsContainer.appendChild(btn);
  });
}

function renderMenu() {
  menuGrid.innerHTML = "";
  menu
    .filter(cat => selectedCategory === "All" || cat.category === selectedCategory)
    .forEach(cat => {
      const card = document.createElement("div");
      card.className = "card";
      const title = document.createElement("h2");
      title.textContent = cat.category;
      card.appendChild(title);

      const list = document.createElement("ul");
      cat.items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
        list.appendChild(li);
      });
      card.appendChild(list);

      menuGrid.appendChild(card);
    });
}

renderButtons();
renderMenu();
