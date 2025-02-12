const bizTypeSelection = document.getElementById("business-type-selection");

const hotelCategorySection = document.getElementById("hotel-category-section");
const productTypeSection = document.getElementById("product-type-section");
const cuisineSection = document.getElementById("cuisine-section");
const scheduleSection = document.getElementById("schedule-section");
const checkInOutSection = document.getElementById("check-in-out-section");
const sections = [
  hotelCategorySection,
  productTypeSection,
  cuisineSection,
  scheduleSection,
  checkInOutSection
];

const showSections = sections => {
  sections.forEach(e => e.hidden = false);
}
const hideSections = sections => {
  sections.forEach(e => e.hidden = true);
}

bizTypeSelection.addEventListener("change", () => {
  hideSections(sections);
  let bizType = bizTypeSelection.value
  switch (bizType) {
    case "bar":
    case "biblioteca":
    case "cafe":
    case "centro comercial":
    case "cine":
    case "museo":
    case "parque":
    case "servicio":
      showSections([scheduleSection]);
      break;
    case "hotel":
      showSections([hotelCategorySection, checkInOutSection]);
      break;
    case "restaurante":
      showSections([cuisineSection, scheduleSection]);
      break;
    case "tienda":
      showSections([productTypeSection, scheduleSection]);
    default:
      break;
  }
})
