const categories = [
  { name: "Fashion", images: [
    "IMAGES/fashion 1.jpg", "IMAGES/fashion 2.jpg", "IMAGES/fashion 3.jpg", "IMAGES/fashion 4.jpg", "IMAGES/fashion 5.jpg",
    "IMAGES/fashion 6.jpg", "IMAGES/fashion 7.jpg", "IMAGES/fashion 8.jpg", "IMAGES/fashion 9.jpg", "IMAGES/fashion 10.jpg"
    , "IMAGES/fashion 11.jpg", "IMAGES/fashion 12.jpg"
  ]},
  { name: "Food", images: [
    "IMAGES/food1.webp", "IMAGES/food2.jpg", "IMAGES/food3.jpg", "IMAGES/food4.jpg", "IMAGES/food5.jpg",
    "IMAGES/food6.jpg", "IMAGES/food7.webp", "IMAGES/food8.jpg", "IMAGES/food9.avif", "IMAGES/food10.jpg" 
    , "IMAGES/food11.jpg", "IMAGES/food12.jpg"
  ]},
  { name: "Books", images: [
    "IMAGES/books1.jpg", "IMAGES/books2.jpg", "IMAGES/books3.jpg", "IMAGES/books4.jpg", "IMAGES/books5.jpg",
    "IMAGES/books6.jpg", "IMAGES/books7.jpg", "IMAGES/books8.jpg", "IMAGES/books9.jpg", "IMAGES/books10.jpg" 
    , "IMAGES/books11.jpg", "IMAGES/books12.jpg"
  ]},

  { name: "Animals", images: [
    "IMAGES/animals1.jpg", "IMAGES/animals2.jpg", "IMAGES/animals3.jpg", "IMAGES/animals4.jpg", "IMAGES/animals5.jpg",
    "IMAGES/animals6.jpg", "IMAGES/animals7.jpg", "IMAGES/animals8.jpg", "IMAGES/animals9.jpg", "IMAGES/animals10.jpg" 
    , "IMAGES/animals11.jpg" , "IMAGES/animals12.jpg"
  ]},
  { name: "Sports", images: [
    "IMAGES/sports1.jpg", "IMAGES/sports2.jpg", "IMAGES/sports3.jpg", "IMAGES/sports4.jpg", "IMAGES/sports5.jpg",
    "IMAGES/sports6.jpg", "IMAGES/sports7.jpg", "IMAGES/sports8.jpg", "IMAGES/sports9.jpg", "IMAGES/sports10.jpg" 
    , "IMAGES/sports11.jpg" , "IMAGES/sports12.jpg"
  ]},
  { name: "Technology", images: [
    "IMAGES/tech1.jpg", "IMAGES/tech2.jpg", "IMAGES/tech3.jpg", "IMAGES/tech4.jpg", "IMAGES/tech5.jpg",
    "IMAGES/tech6.jpg", "IMAGES/tech7.jpg", "IMAGES/tech8.jpg", "IMAGES/tech9.jpg", "IMAGES/tech10.jpg" 
    , "IMAGES/tech11.jpg", "IMAGES/tech10.webp"
  ]},

  { name: "Art", images: [
    "IMAGES/art1.jpg", "IMAGES/art2.jpg", "IMAGES/art3.jpg", "IMAGES/art4.jpg", "IMAGES/art5.jpg",
    "IMAGES/art6.jpg", "IMAGES/art7.jpg", "IMAGES/art8.jpg", "IMAGES/art9.jpg", "IMAGES/art10.jpg" 
    , "IMAGES/art11.jpg", "IMAGES/art12.jpg"
  ]}
];

const categorySlider = document.querySelector(".category-slider");
const categoryView = document.getElementById("categoryView");
const categoryTitle = document.getElementById("categoryTitle");
const backBtn = document.getElementById("backBtn");
const imageGrid = document.querySelector(".image-grid");
const heroSection = document.querySelector(".hero");
const categoriesSection = document.querySelector(".categories");

const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentCategoryIndex = 0;
let currentImageIndex = 0;

function createCategoryCard(category, index) {
  const card = document.createElement("div");
  card.classList.add("category-card");
  card.dataset.index = index;

  const img = document.createElement("img");
  img.src = category.images[0];
  img.alt = `${category.name} thumbnail`;
  card.appendChild(img);

  const span = document.createElement("span");
  span.textContent = category.name;
  card.appendChild(span);

  card.addEventListener("click", () => openCategory(index));

  return card;
}

function renderCategories() {
  categories.forEach((cat, i) => {
    categorySlider.appendChild(createCategoryCard(cat, i));
  });
}

function openCategory(index) {
  currentCategoryIndex = index;
  heroSection.style.display = "none";
  categoriesSection.style.display = "none";
  categoryView.style.display = "block";

  categoryTitle.textContent = categories[index].name;
  renderImages(index);
}

function renderImages(index) {
  imageGrid.innerHTML = "";
  const imgs = categories[index].images;
  imgs.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = categories[index].name + " image";
    img.addEventListener("click", () => openModal(i));
    imageGrid.appendChild(img);
  });
}

function openModal(imageIndex) {
  currentImageIndex = imageIndex;
  modalImg.src = categories[currentCategoryIndex].images[imageIndex];
  imgModal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  imgModal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % categories[currentCategoryIndex].images.length;
  modalImg.src = categories[currentCategoryIndex].images[currentImageIndex];
});

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + categories[currentCategoryIndex].images.length) % categories[currentCategoryIndex].images.length;
  modalImg.src = categories[currentCategoryIndex].images[currentImageIndex];
});

backBtn.addEventListener("click", () => {
  categoryView.style.display = "none";
  heroSection.style.display = "flex";
  categoriesSection.style.display = "block";
});

renderCategories();
