function changeMenu() {
    const menu = document.querySelector(".menu_box")
    const menu_img = document.querySelector(".menu_img")
    const currentSrc = menu_img.src;

    const img1 = "../img/Menu.png";
    const img2 = "../img/menu_black.svg";

    const normalizedImg1 = new URL(img1, window.location.href).href;
    const normalizedImg2 = new URL(img2, window.location.href).href;

    if (currentSrc === normalizedImg1) {
        menu_img.src = img2;
    } else {
        menu_img.src = img1;
    }

    
    menu.classList.toggle("menu_none")
    menu_img.classList.toggle("menu_img_click")
    
    
}
