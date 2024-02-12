
document.querySelector(".darkmode").addEventListener("click", () => {
  if (document.querySelector(".darkmode").classList.contains("fa-moon")) {
    document.querySelector(".darkmode").classList.remove("fa-moon");
    document.querySelector(".darkmode").classList.add("fa-sun");
  } else {
    document.querySelector(".darkmode").classList.add("fa-moon");
  }
  document.body.classList.toggle("dark-theme");
});
