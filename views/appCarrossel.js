const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next(){

    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);

};

function prev(){

    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);

}; 

btnNext.addEventListener('click', function(){
    next();

});

btnPrev.addEventListener('click', function(){
    prev();

});

setInterval(function(){
    next();
},3000);
