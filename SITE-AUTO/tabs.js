const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
console.log(tabsBtn);
// const tabsContentitem = document.getElementsByTagName();

tabsBtn.forEach(function(item) {
    console.log(item);
    
    item.addEventListener("click", function() {
        
        let currentBtn = item;
        
        //Для того, чтобы убрать класс active_tab не только у какого-то одного элемента, а у всей колекции табов, мы обращаемся к переменной tabsBtn - в которой лежит массив из 3 табов, вешаем на него метод перебора и вызова callback функции = forEach, и удаляем у них активный класс active_tab 
        
        tabsBtn.forEach(function(item){
            item.classList.remove('active_tab');
        });

        // После удаления класса active_tab у всех табов, мы добавляем на текущий, кликнутый таб, активный класс active_tab
        currentBtn.classList.add('active_tab');
    })
});