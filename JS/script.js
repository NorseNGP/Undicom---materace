var counter = 1;

function sliderChange() {
    let slideTime = 5000;
    let fotoSlider = document.querySelector(".foto-slider");
    fotoSlider.style = `background-image: linear-gradient(rgba(4, 5, 26, .4), rgba(4, 5, 26, .4)), url('./images/foto_slider/img` + counter + `.jpg');`;
    if (counter == 3) {
        counter = 0;
    }
    counter++;
    setTimeout(sliderChange, slideTime);
}

function openMenu() {
    document.querySelector(".menu-icon").classList.toggle("active");
    document.querySelector(".nav-list").classList.toggle("active");
}

document.querySelector(".menu-icon").addEventListener('click', openMenu);
sliderChange();