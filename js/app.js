let main_body = document.querySelector(".main-contents");
let menu_div = document.querySelector(".menu");

let menu_icon = document.querySelector(".icon-menu");
let close_outline = document.querySelector(".menu-close-icon");

menu_icon.addEventListener('click', () => {
    main_body.style.right = "300px";
    menu_div.style.right = "0px";
    menu_icon.style.display = "none";
    close_outline.style.display = "block";
    // menu_icon.setAttribute("name", "close-outline");
});

close_outline.addEventListener('click', ()=>{
    main_body.style.right = "0px";
    menu_div.style.right = "-300px";
    close_outline.style.display = "none";
    menu_icon.style.display = "block";
    // menu_icon.setAttribute("name", "close-outline");
});