const mobileMenuBtn = document.querySelector(".menu__btn");
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




// JS код работы скролл кнопки, поднятия наверх страницы

const offset = 300;

const scrollPage = document.querySelector(".scrollPage");
const scrollPage__path = document.querySelector(".scrollPage__path");
const pathLength = scrollPage__path.getTotalLength();

// scrollPage__path.style.strokeDashArray = `{$pathLength} {$pathLength}`;
scrollPage__path.style.transition = "stroke-dashoffset 5ms";

console.log(scrollPage);
console.log(scrollPage__path);
console.log(pathLength);



let countCoordinates = () =>  window.scrollY || document.documentElement.scrollTop;
console.log(countCoordinates);
console.log(window.scrollY);

//Далее мы напишем три метода для того, чтобы работала кнопочка наверх, к началу страницы


//updateDashOffset - первый метод - следит и вычисляет обновленный отступ от начала страницы
const updateDashOffset = () => {};

//onScroll - второй метод будет по клику скролить и возвращать пользователя к началу страницы

window.addEventListener(
    'scroll', () => {
        updateDashOffset();
        if(countCoordinates() > offset) {
            scrollPage.classList.add('scrollPage--active');

        } else {
            scrollPage.classList.remove('scrollPage--active');
        }

    }
);


//click - третья функция по клику будет как раз активировать данный скролл наверх


scrollPage.addEventListener(
    'click', ()=>{
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        );
    }
);