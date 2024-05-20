let swiper = new Swiper(".team-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {

        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        750: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let conceptImages = document.querySelectorAll('.concept-img');

    conceptImages.forEach(function(conceptImg) {
        conceptImg.addEventListener('click', function() {

            if (this.classList.contains('active')) {
                // If the image is already active, remove the active class and show all images and texts
                this.classList.remove('active');
                this.querySelector('.text-blk').style.opacity = '0';
                setTimeout(() => {
                    this.querySelector('.text-blk').style.display = 'none';
                }, 0); // Immediate hide without delay
                this.querySelector('.strong-text').style.display = 'block';
                conceptImages.forEach(function(img) {
                    img.style.display = 'block';
                    img.querySelector('.strong-text').style.display = 'block';
                });
            } else {
                // Hide all images except the clicked one and hide the strong text
                conceptImages.forEach(function(img) {
                    if (img !== conceptImg) {
                        img.style.display = 'none'; // Hide other images
                    }
                    img.classList.remove('active');
                    img.querySelector('.text-blk').style.opacity = '0';
                    setTimeout(() => {
                        img.querySelector('.text-blk').style.display = 'none';
                    }, 0); // Immediate hide without delay
                    img.querySelector('.strong-text').style.display = 'block';
                });

                // Add active class to the clicked element
                this.classList.add('active');
                this.querySelector('.strong-text').style.display = 'none';
                this.style.display = 'block'; // Show the active image

                // Delay showing the text block until after the transition
                let textBlk = this.querySelector('.text-blk');
                setTimeout(() => {
                    textBlk.style.display = 'block';
                    setTimeout(() => {
                        textBlk.style.opacity = '1'; // Fade in the text
                    }, 500); // Ensure the opacity change happens after display
                }, 100); // Adjust the delay to match the transition duration
            }
        });
    });
});


let designSwiper = new Swiper(".design-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function myFunc() {
    let x = document.getElementById("myNavbar");
    let b = document.getElementById("content");
    if (x.className === "navbar") {
        x.className += " responsive";
        b.className += "blur";
    } else {
        x.className = "navbar";
        b.className = "";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let hoverElements = document.querySelectorAll('.gentle-hover-shake');

    hoverElements.forEach(function (hoverElement) {
        hoverElement.addEventListener('mouseenter', function () {
            hoverElements.forEach(function (elem) {
                elem.classList.add('animate');
            });
        });

        // Event listener voor het einde van de animatie
        hoverElement.addEventListener('animationend', function () {
            hoverElements.forEach(function (elem) {
                elem.classList.remove('animate');
            });
        });
    });
});

