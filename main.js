const slideList = [
    {
        img: "gallery/christian-joudrey-9bdt03k4ujw-unsplash.jpg",
        text: "Nihon no shinden wa subarashī desu",
    }, 
    {   img: "gallery/clay-banks-hwLAI5lRhdM-unsplash (1).jpg",
        text: "Nihon-go wa totemo merodikku desu."}, 
    {   img: "gallery/sora-sagano-8sOZJ8JF0S8-unsplash.jpg",
        text: "Nihon wa kirei desu."},
];

const timeOfSlide = 3000;
let activImgElement = 0;

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
// rest [...] > zmiana elementów html na tablicę:::
const dots = [...document.querySelectorAll(".dots span")];

const changeDot = () => {
    // zostanie zwrócony index elementu z klasą active
    const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
    dots[activeDot].classList.remove("active");
    dots[activImgElement].classList.add("active");
}

const changeSlide = function() {
    activImgElement++;
    if (activImgElement === slideList.length){
        activImgElement = 0;
    }
    image.src = slideList[activImgElement].img;
    h1.textContent = slideList[activImgElement].text;

    changeDot();

}

const keyChangeSlide = function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 37 || e.keyCode == 39){
        clearInterval(indexInterval);
        e.keyCode == 37? activImgElement-- : activImgElement++;
        if (activImgElement === slideList.length ){
            activImgElement = 0;
        } else if (activImgElement < 0){
            activImgElement = slideList.length-1;
        }

        image.src = slideList[activImgElement].img;
        h1.textContent = slideList[activImgElement].text;
        changeDot();
        indexInterval = setInterval(changeSlide, timeOfSlide);
    }
}
// zmiana slidu, wywołanie funkcji changeSlide
let indexInterval = setInterval(changeSlide, timeOfSlide);

// zmiana slidu za poomocą strzałek na klawiaturze:
window.addEventListener("keydown", keyChangeSlide);