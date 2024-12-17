let nav = document.querySelector(".menu__btn");
console.log(nav);
let menu = document.querySelector(".menu__list");
console.log(menu);
let menuCloseBtn = document.querySelector(".menu__close-btn");
console.log(menuCloseBtn);
let opicityBlock = document.querySelector(".menu--close");

// Всегда лучше вешать обработчики событий на кнопки в данном случае button (а я повесил вначале на div class=nav и у меня работало через раз!!!)
nav.addEventListener("click", ()=> {
        menu.classList.toggle("menu__list-open");
        opicityBlock.classList.add("menu--open");
    
    }
        

    );


menuCloseBtn.addEventListener("click", ()=>{
    menu.classList.toggle('menu__list-open');
    opicityBlock.classList.remove("menu--open");
});

