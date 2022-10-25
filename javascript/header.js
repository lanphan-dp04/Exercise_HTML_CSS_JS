const slideBarElm = document.getElementById("slidebar");
const closeSlideBarElm = document.getElementById("line");
const openModalImageElm = document.querySelector(".slidebar-image");
const closeImageElm = document.querySelector(".modal-closebutton");

console.log(openModalImageElm);
slideBarElm.addEventListener("click", (e) => {
  const showSlider = document.querySelector(".slidebar-container");
  showSlider.style.display = "block";
});

closeSlideBarElm.addEventListener("click", (e) => {
  const closeSlideBar = document.querySelector(".slidebar-container");
  closeSlideBar.style.display = "none";
});

openModalImageElm.addEventListener("click", (e) => {
  const openmodalimage = document.getElementById("modal-container");
  openmodalimage.style.display = "block";
});

closeImageElm.addEventListener("click", (e) => {
  let imageNumber = openModalImageElm;

  const closeimage = document.getElementById("modal-container");
  closeimage.style.display = "none";
});
