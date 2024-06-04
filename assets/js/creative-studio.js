/*!
=========================================================
* Creative Studio Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 100, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 

// JavaScript to handle slideshow and background image update
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active"); // Remove active class from all dots
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active"); // Add active class to the dot corresponding to the current slide

    var backgroundImage = slides[slideIndex - 1].style.backgroundImage;
    document.querySelector('.header').style.backgroundImage = backgroundImage;

    setTimeout(showSlides, 2500); // Change image every 2 seconds
}

function currentSlide(n) {
    showSlides(slideIndex = n); // Show the slide corresponding to the clicked dot
}



//Testimonial Slider
let test_slideIndex = 1;
    test_showSlides(test_slideIndex);

    function test_currentSlide(n) {
        test_showSlides(test_slideIndex = n);
    }

    function test_showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("test-slide");
        let dots = document.getElementsByClassName("test-dot");
        if (n > slides.length) {
            test_slideIndex = 1
        }
        if (n < 1) {
            test_slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[test_slideIndex - 1].style.display = "block";
        dots[test_slideIndex - 1].className += " active";
    }

    // Automatic slideshow
    let test_slideInterval = setInterval(test_nextSlide, 3000); // Change slide every 3 seconds

    function test_nextSlide() {
        test_showSlides(test_slideIndex += 1);
    }

    // Pause slideshow when hovering over carousel
    let carousel = document.querySelector('.test-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(test_slideInterval);
    });

    // Resume slideshow when mouse leaves carousel
    carousel.addEventListener('mouseleave', () => {
        test_slideInterval = setInterval(test_nextSlide, 2000);
    });

// **************************************************************************************8
let timers = {};

function startCounter(counterId, maxCount) {
    const counterElement = document.getElementById(`counter${counterId}`);
    counterElement.textContent = '0'; // Reset counter to zero before starting
    if (!timers[counterId]) {
        timers[counterId] = setInterval(() => {
            let currentValue = parseInt(counterElement.textContent);
            currentValue += 1;
            counterElement.textContent = currentValue;
            if (currentValue >= maxCount) {
                stopCounter(counterId);
            }
        }, 50);
    }
}

function stopCounter(counterId) {
    if (timers[counterId]) {
        clearInterval(timers[counterId]);
        delete timers[counterId];
    }
}

// Intersection Observer setup
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(1, 40); // Stops at 20
            startCounter(2, 7); // Stops at 30
            startCounter(3, 5); // Stops at 25
            startCounter(4, 100); // Stops at 15
        }
    });
}, {
    root: null, // observes in viewport
    threshold: 0.5 // 50% of the item must be visible to trigger
});

// Target to observe
let target = document.querySelector('.counter-section');
observer.observe(target);

