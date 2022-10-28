const slideBarElm = document.getElementById("slidebar");
const closeSlideBarElm = document.getElementById("line");
// const openModalImageElm = document.querySelectorAll(".slidebar-image");
const openModalImageElm = document.querySelectorAll(".carousel-item");

//const openModalImageElm = document.querySelector(".slidebar-image");
const openModalElm = document.querySelector(".slidebar-map");
const closeImageElm = document.querySelector(".modal-closebutton");

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
  for (let i = 0; i < openModalImageElm.length; i++) {
        openModalImageElm[i].classList.remove('active');
    
  }
});

const handleClickModal = () => {
  for (let i = 0; i < openModalImageElm.length; i++) {
    const slidebarElment = document.querySelector(`.slidebar-image-${i}`)
    slidebarElment.addEventListener("click", (e) => {
      slidebarElment;
      if(openModalImageElm[i].classList.contains('active')) {
        openModalImageElm[i].classList.remove('active');
      }
      openModalImageElm[i].classList.add('active');
      const openmodalimage = document.getElementById("modal-container");
      openmodalimage.style.display = "block";

    });
  }
}
handleClickModal();