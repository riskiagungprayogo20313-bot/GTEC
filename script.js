// script.js — nav interactions (dropdown)
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("racingBtn");
  const dd = document.getElementById("racingDropdown");

  if(btn && dd){
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dd.classList.toggle("show");
    });

    // close on outside click
    document.addEventListener("click", (e) => {
      if(!dd.contains(e.target) && !btn.contains(e.target)){
        dd.classList.remove("show");
      }
    });
  }
});