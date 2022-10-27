const reveal = () => {
  const reveals = document.querySelectorAll(".js-reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 30;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("js-reveal-active");
    } else {
      reveals[i].classList.remove("js-reveal-active");
    }
  }
}

export const handleReveal = () => {
  window.addEventListener("scroll", reveal);
}
