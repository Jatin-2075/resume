window.onload = function () {
  showSlide(0);
};

function showSlide(index) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec, i) => {
    if (i === index) {
      sec.style.display = "block";
      setTimeout(() => {
        sec.classList.add("show");
      }, 10); // Small delay for transition
    } else {
      sec.classList.remove("show");
      setTimeout(() => {
        sec.style.display = "none";
      }, 500); // match with CSS transition
    }
  });
}
