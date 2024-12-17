const mobileMenuBtn = document.querySelector(".mobileMenu");
const mainMenu = document.querySelector(".menu__list2");

console.log(mobileMenuBtn);
console.log(mainMenu);

mobileMenuBtn.addEventListener("click", ()=>{
    mainMenu.classList.toggle("mobileMenu--active");

});


const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
console.log(menuBtn);
console.log(menu);

menuBtn.addEventListener(
    "click", ()=> {
        menu.classList.toggle("menu__list-active");
    }

    
    );

const chooseTabsBtn = document.querySelectorAll(".chooseTabs__btn-item");

console.log(chooseTabsBtn);

const chooseTabsContent = document.querySelectorAll(".chooseTabs__content-item");

console.log(chooseTabsContent);

chooseTabsBtn.forEach(function(elem) {
    elem.addEventListener("click", open);

    function open(elem) {

        
        
        //Свойство elem.currentTarget содержит элемент, для которого было назначено событие. 
        const tabTarget = elem.currentTarget; 
        console.log(tabTarget);

        //Свойство dataset позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе.
        const dataButton = tabTarget.dataset.attribute; 
        console.log(dataButton);

    
        chooseTabsBtn.forEach(function(elem) {
            elem.classList.remove("chooseTabs__btn-item--active");
        });



        chooseTabsContent.forEach(function(item) {
            item.classList.remove("content-item--active");

        });


        tabTarget.classList.add("chooseTabs__btn-item--active");

        let currentTabContent = document.querySelector(`#${dataButton}`);
        console.log(currentTabContent);

       

        currentTabContent.classList.add("content-item--active");

        
       
 
    }

});

