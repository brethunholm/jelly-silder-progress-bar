const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const images = Array.from(document.querySelectorAll('img'))
const progress =  document.getElementById('progressBar')
console.log(progress.value)
let moved = 1 // progress bar memory 


function handleNext() {
   let currentImage = document.querySelector('img.active')
   
    currentImage.classList.add('hidden');
    currentImage.classList.remove('active');
    const nextImg = currentImage.nextElementSibling || document.querySelector('.first')
    
    nextImg.classList.add('active')
    nextImg.classList.remove('hidden')
    console.log(nextImg)
    currentImage = document.querySelector('img.active');
    updateProgress();
}

function handlePrev() {
  
   let currentImage = document.querySelector('img.active')
    currentImage.classList.add('hidden');
    currentImage.classList.remove('active');
    const prevImg = currentImage.previousElementSibling  || document.querySelector('.last');
   console.log(prevImg)
    prevImg.classList.add('active')
    prevImg.classList.remove('hidden')
    subtractProgress();
    
  
}


function zoomImg(e) {
 currentImage = e.currentTarget;
 console.log(currentImage)
 currentImage.classList.toggle('zoom');
}

function handleKeyUp(e) {
    if (e.key === 'ArrowRight') return handleNext();
    if (e.key === 'ArrowLeft') return handlePrev();
}


function updateProgress() {

const amountToMove = document.querySelectorAll('.img');
console.log(amountToMove)
const distanceToMove = Math.floor(100 / amountToMove.length);
console.log(amountToMove.length)
progress.value = moved += distanceToMove;

}


function subtractProgress() {

const amountToMove = document.querySelectorAll('.img');
console.log(amountToMove)
const distanceToMove = Math.floor(100 / amountToMove.length);
console.log(amountToMove.length)
progress.value = moved -=distanceToMove;
}




// event listeners
nextButton.addEventListener('click', handleNext);

prevButton.addEventListener('click', handlePrev);
window.addEventListener('keyup', handleKeyUp)



images.forEach((image) =>
    image.addEventListener('click', (e) => zoomImg(e))
  );

  
 