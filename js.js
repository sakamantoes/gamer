const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const movieList = ['bg-vide0.mp4','bg-vide01.mp4','bg-vide02.mp4','bg-vide03.mp4','bg-vide04.mp4','bg-vide05.mp4','bg-vide1.mp4'];

let index = 0;

nextButton.addEventListener('click', ()=>{
    index += 1
    video.src = movieList[index];
    if(index === 6){
        index = -1;
    }
})