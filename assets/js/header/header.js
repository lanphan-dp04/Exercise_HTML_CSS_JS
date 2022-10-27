const slideBarElm = document.getElementById("slidebar");
const closeSlideBarElm = document.getElementById("line");
const openModalImageElm = document.querySelectorAll(".slidebar-image");
// const openModalImageElm = document.querySelector(".slidebar-image");

const closeImageElm = document.querySelector(".modal-closebutton");

console.log("open", openModalImageElm);
slideBarElm.addEventListener("click", (e) => {
  const showSlider = document.querySelector(".slidebar-container");
  showSlider.style.display = "block";
});

closeSlideBarElm.addEventListener("click", (e) => {
  const closeSlideBar = document.querySelector(".slidebar-container");
  closeSlideBar.style.display = "none";
});

closeImageElm.addEventListener("click", (e) => {
  const closeimage = document.getElementById("modal-container");
  closeimage.style.display = "none";
});

for (let i = 0; i <= openModalImageElm.length; i++) {
  console.log(openModalImageElm[i].src);
  openModalImageElm[i].addEventListener("click", (e) => {
    const openmodalimage = document.getElementById("modal-container");
    openmodalimage.style.display = "block";
  });
}
