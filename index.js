const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const images = Array.from(document.querySelectorAll('img'))
const progress =  document.getElementById('progressBar')
console.log(progress.value)
let moved = 1 // progress bar memory 

subtractProgress();

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

const distanceToMove = Math.floor(100 / amountToMove.length);

console.log(progress.value)
// progress.value = moved += distanceToMove;

if(progress.value > 97) {
    progress.value = 0;
    moved = 0
  
} else {
    progress.value = moved += distanceToMove;
}

}


function subtractProgress() {

const amountToMove = document.querySelectorAll('.img');
console.log(amountToMove)
const distanceToMove = Math.floor(100 / amountToMove.length);
progress.value = moved -=distanceToMove;

// console.log(progress.value)
// console.log(moved)
// TODO make progress bar work backwords after 1 full loop
// if(progress.value === 0) {
//     prevButton.disabled = true;
// } else if(progress.value >= 1) {
//     progress.value = moved -=distanceToMove;
//     prevButton.disabled = false;
// }
}


// event listeners
nextButton.addEventListener('click', handleNext);

prevButton.addEventListener('click', handlePrev);
window.addEventListener('keyup', handleKeyUp)



images.forEach((image) =>
    image.addEventListener('click', (e) => zoomImg(e))
  );

  
 