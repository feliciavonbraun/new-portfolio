
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 300) {
    opacity = 0 - currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".projectArea").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 1000) {
    opacity = 0 - currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".aboutArea").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 1800) {
    opacity = 0 - currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".skillsArea").style.opacity = opacity;
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 1900) {
    opacity = 0 - currentScroll / checkpoint;
  } else {
    opacity = 1;
  }
  document.querySelector(".contactArea").style.opacity = opacity;
});