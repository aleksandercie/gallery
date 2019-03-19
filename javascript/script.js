// Variables
var gallery = document.querySelectorAll('.images');
var numbers = document.querySelectorAll('.number');

var currentSlide = 0;

// Button click 

document.querySelector('.next').onclick = function(){
   next();
};

document.querySelector('.prev').onclick = function(){
   prev();
};

// Function next slide

function next() {
  if (currentSlide == gallery.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
   
  document.querySelector('.images.images-show').classList.remove('images-show');
  gallery[currentSlide].classList.add('images-show');
   
   
  document.querySelector('.number.active').classList.remove('active');
  numbers[currentSlide].classList.add('active');
}

// Function previous slide

function prev() {
  if (currentSlide == 0) {
    currentSlide = gallery.length - 1;
  } else {
    currentSlide--;
  }

  document.querySelector('.images.images-show').classList.remove('images-show');
  gallery[currentSlide].classList.add('images-show');
   
   
  document.querySelector('.number.active').classList.remove('active');
  numbers[currentSlide].classList.add('active');
}


// Click on number and change slide

for (var i = 0; i < numbers.length; i++) {
 (function(index){
    numbers[i].onclick = function() {
      if (index !== currentSlide) {
        document.querySelector('.number.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.images.images-show').classList.remove('images-show');
        gallery[index].classList.add('images-show');
      
        currentSlide = index;
      }
   }
 })(i);
}