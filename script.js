document.getElementsByTagName("a")[0].addEventListener("click", () => {
  document.getElementsByClassName("content")[0].classList.add("active");
  document.getElementsByTagName("a")[0].classList.add("active");

  document.getElementsByClassName("content")[1].classList.remove("active");
  document.getElementsByTagName("a")[1].classList.remove("active");

  document.getElementsByClassName("content")[2].classList.remove("active");
  document.getElementsByTagName("a")[2].classList.remove("active");
});

document.getElementsByTagName("a")[1].addEventListener("click", () => {
  document.getElementsByClassName("content")[1].classList.add("active");
  document.getElementsByTagName("a")[1].classList.add("active");

  document.getElementsByClassName("content")[0].classList.remove("active");
  document.getElementsByTagName("a")[0].classList.remove("active");

  document.getElementsByClassName("content")[2].classList.remove("active");
  document.getElementsByTagName("a")[2].classList.remove("active");
});

document.getElementsByTagName("a")[2].addEventListener("click", () => {
  document.getElementsByClassName("content")[2].classList.add("active");
  document.getElementsByTagName("a")[2].classList.add("active");

  document.getElementsByClassName("content")[0].classList.remove("active");
  document.getElementsByTagName("a")[0].classList.remove("active");

  document.getElementsByClassName("content")[1].classList.remove("active");
  document.getElementsByTagName("a")[1].classList.remove("active");
});
