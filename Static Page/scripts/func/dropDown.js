const menuList = document.querySelector(".navbarMobile");
let display = true;

export function dropMenu() {
  if (display) {
    menuList.style.display = "block";
    display = !display;
  } else {
    menuList.style.display = "none";
    display = !display;
  }
}
