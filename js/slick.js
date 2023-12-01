$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        autoPlaySpeed: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotHover: false,
        prevArrow: `<button class="slider__arrow slider__arrow--left"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_237_144)">
        <path d="M11.003 40.094C9.66502 41.446 9.66502 43.635 11.003 44.987C12.339 46.337 14.509 46.339 15.847 44.987L34.997 25.448C36.335 24.096 36.335 21.905 34.997 20.553L15.847 1.014C14.509 -0.338 12.341 -0.338 11.003 1.014C9.66502 2.366 9.66502 4.555 11.001 5.907L26.706 23L11.003 40.094Z" fill="#F0E3CA"/>
        </g>
        <defs>
        <clipPath id="clip0_237_144">
        <rect width="46" height="46" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </button>`,
        nextArrow: `<button class="slider__arrow slider__arrow--right"><svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_237_144)">
        <path d="M11.003 40.094C9.66502 41.446 9.66502 43.635 11.003 44.987C12.339 46.337 14.509 46.339 15.847 44.987L34.997 25.448C36.335 24.096 36.335 21.905 34.997 20.553L15.847 1.014C14.509 -0.338 12.341 -0.338 11.003 1.014C9.66502 2.366 9.66502 4.555 11.001 5.907L26.706 23L11.003 40.094Z" fill="#F0E3CA"/>
        </g>
        <defs>
        <clipPath id="clip0_237_144">
        <rect width="46" height="46" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </button>`,
    });
});