const slideList = [
    {
        img: "gallery/christian-joudrey-9bdt03k4ujw-unsplash.jpg",
        text: "Nihon no shinden wa subarashī desu",
    }, 
    {   img: "gallery/clay-banks-hwLAI5lRhdM-unsplash (1).jpg",
        text: "Nihon-go wa totemo merodikku desu."}, 
    {   img: "sora-sagano-8sOZJ8JF0S8-unsplash.jpg",
        text: "Nihon wa kirei desu."},
];

const timeOfSlide = 3000;
let activImgElement = 0;

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");


const changeSlide = function() {
    activImgElement++;
    if (activImgElement === slideList.length){
        activImgElement = 0;
    }
    image.src = slideList[activImgElement].img;
    h1.textContent = slideList[activImgElement].text;


}




// zmiana slidu, wywołanie funkcji changeSlide
setInterval(changeSlide, timeOfSlide)