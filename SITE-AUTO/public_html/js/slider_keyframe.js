// JS скрипт функционала слайдера
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");
console.log(arrowRight);
console.log(slides.length);
console.log(bottom);

let currentSlideIndex = 0;



function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}


function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function changeSlide(slideIndex) {
    hideSlide(); //у нас начинается переменная currentSlideIndex с индекса = 0, и это первый слайдер, с помощью данной функции он делается невидимым. 
    removeActiveClass();

    currentSlideIndex = slideIndex;

    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1; //Здесь добавляется плюс 1 к индексу и уже далее идет показ картинки с индексом следующим 0+1 = 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }

    changeSlide(newSlideIndex);
        
    
}

function previousSlide() {

    
    // hideSlide();
    // removeActiveClass();
    // currentSlideIndex --;
    // if(currentSlideIndex < 0) {
    //     currentSlideIndex = slides.length - 1;
    // }


    let newSlideIndex = currentSlideIndex - 1; //Здесь удаляется на минус 1 индекс, 

    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
        // и далее идет проверка, если индекс меньше нуля, то индекс нового слайда, когда мы доходим до первого слайда, листая назад, становится равным = длина массива минус 1,  то есть у нас длина массива  = 4, четыре слайда из 4 вычитается 1 и получается индекс = 3, он и приходит в метод, который выводит на экран слайдер и отображается слайдер с индексом 3 или последний слайдер, то есть листая назад от первого слайдера мы переходим автоматически на последний слайдер. 
    }

    changeSlide(newSlideIndex);
    

    
}




// Код работы пагинации кружков снизу для пролистывания слайдера

const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-cirle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

console.log(paginationCircles);

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");

    //В paginationCirles у нас лежит массив с элементами div с классом pagination-cirle, а у первого элемента этого массива с индексом 0 - будет еще доабвлен класс active, который закрасит кружок в фиолетовый цвет. 
    //Далее идет применяется перебор массивов forEach, котоорый применяет callback функцию к элементам массива - это item  и index, и к ним применяется стрелочная функция item.addEventListener() и далее, при событии - КЛИК, срабатывает в нем еще одна функция, тоже стрелочная, такая ()=>changeSlide(index); И так как item и index при переборе forEach() идут в строгом соответствии, у нас при клике на нужный кружок, сработает метод changeSlide(index), который перелистнет слайд и закрасит кнопку нажатую в фиолетовый цвет. 

    paginationCircles.forEach(
        (item, index) => {
            item.addEventListener("click", ()=> changeSlide(index));
        }


    );

}



addPagination();

arrowRight.addEventListener("click", nextSlide);

arrowLeft.addEventListener("click", previousSlide);


//Написание кода табов для страницы КОНТАКТЫ

let newTabBtn = document.querySelectorAll(".newtabs__list-item");
console.log(newTabBtn);

let newTabsContents = document.querySelectorAll(".newtabs__content");
console.log(newTabsContents);

newTabBtn.forEach(function(tabBtn) {
    console.log(tabBtn);



    tabBtn.addEventListener("click", function() {
        console.log(tabBtn);

        //Мы получаем атрибут не у всего документа, окна, а у элементов, приходящих в массив tabBtn
        let newTabId = tabBtn.getAttribute("data-attribute");    
        console.log(newTabId);

        let newTabContent = document.querySelector(newTabId);

        newTabsContents.forEach(function(newTabContent) {
            newTabContent.classList.remove("tab-item-active");
        });

        


        newTabBtn.forEach(function(tabBtn) {
            tabBtn.classList.remove("tab-item-active");
        });

        tabBtn.classList.add("tab-item-active");
        newTabContent.classList.add("tab-item-active");


    });

});