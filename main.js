let swiper = new Swiper(".team-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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

function myFunc() {
    let x = document.getElementById("myNavbar");
    let b = document.getElementById("content");
    if (x.className === "navbar") {
        x.className += " responsive";
        b.className += "blur"
    } else {
        x.className = "navbar";
        b.className = ""
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let hoverElements = document.querySelectorAll('.gentle-hover-shake');

    hoverElements.forEach(function(hoverElement) {
        hoverElement.addEventListener('mouseenter', function() {
            hoverElements.forEach(function(elem) {
                elem.classList.add('animate');
            });
        });

        // Event listener voor het einde van de animatie
        hoverElement.addEventListener('animationend', function() {
            hoverElements.forEach(function(elem) {
                elem.classList.remove('animate');
            });
        });
    });
});

