const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
console.log(menuBtn);
console.log(menu);

menuBtn.addEventListener(
    "click", ()=> {
        menu.classList.toggle("menu__list-active");
    }

    
    );

// JS скрипт функционала слайдера
const slider = document.getElementById("mySlider2");
const arrowLeft = document.querySelector(".arrow-second-left");
const arrowRight = document.querySelector(".arrow-second-right");
const slides = document.querySelectorAll(".slider-image2");
const bottom = document.getElementById("bottom2");
console.log(arrowRight);
console.log(slides.length);
console.log(bottom);
console.log(slides);


let currentSlideIndex = 0;
const sliderWidth = slider.clientWidth;






//При работе слайдера путем сдвига слайдера влево и показа текущего слайдера, данная функция hideSlide() нам не нужна. 
// function hideSlide() {
//     slides[currentSlideIndex].classList.remove("block");
// }


function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}


function changeSlide(slideIndex) {
    // hideSlide(); //у нас начинается переменная currentSlideIndex с индекса = 0, и это первый слайдер, с помощью данной функции он делается невидимым. 
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
        // newSlideIndex = 0; //Здесь он назад не будет крутить
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
    if(paginationCircles[0]) {paginationCircles[0].classList.add("active");} 
    

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



//WRITE CODE THAT MAKES WORK OUR TABS COLLECTION

let tabs = document.querySelectorAll(".tabs__nav-btn");
console.log(tabs);
let tabsContentItems = document.querySelectorAll(".tabs__content-item");
console.log(tabsContentItems);

//В переборе forEach, в самой функции, туда будет приходить переменная, условно ее назовем tabsNavBtn - то есть элемент массива let tabs = document.querySelectorAll(".tabs__nav-btn"); - туда придут все табы div  с классом = .tabs__nav-btn
tabs.forEach(function(tabsNavBtn) {
    tabsNavBtn.addEventListener("click", function() {
        
        console.log("Что приходит в tabsNavBtn"); //Посмотрим что приходит в tabsNavBtn
        console.log(tabsNavBtn);
        
        let tabId = tabsNavBtn.getAttribute("data-tab");
        console.log(tabId);
        let currentTab = document.querySelector(tabId);
        console.log(currentTab);

        tabs.forEach(function(tabsNavBtn) {
            tabsNavBtn.classList.remove('active_tab');
        });
      
        tabsContentItems.forEach(function(currentTab) {
            currentTab.classList.remove('active_tab');
        });

        tabsNavBtn.classList.add('active_tab');
        currentTab.classList.add('active_tab');
        

        });

        

    });



// Для того, чтобы в дальнейшем скрипт таба понимал, какую контентную область из трех контентов показывать, при нажатии одной из кнопки табов, нам нужно задать и прописать параметр data-atribute у каждого дива контентной области табов. То есть у каждого div  с классом tabs__content-item мы будем добавлять параметр data-atribute="tab1" и тд








