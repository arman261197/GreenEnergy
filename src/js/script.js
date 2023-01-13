$(document).ready(function(){
    $('.services_wrapper').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
                  }
                },
            {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
              }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
            }
        ]
    });
  });

$(document).ready(function(){
$('.projects_wrapper').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
        breakpoint: 1200,
        settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
            }
        },
        {
        breakpoint: 992,
        settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true,
          }
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
        }
        }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/projects_arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/projects_arrow_right.svg"></button>'
});
});

document.addEventListener('DOMContentLoaded', () => {

    const inputElement = document.querySelector('.feedback_phone') // ищем наш единственный input
    const maskOptions = { // создаем объект параметров
      mask: '+{7}(000)000-00-00' // задаем единственный параметр mask
    }
    IMask(inputElement, maskOptions) // запускаем плагин с переданными параметрами
  
  })

$(document).ready(function(){
$('.company_wrapper').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
              }
            },
        {
        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
          }
        },
        {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        }
        }
    ],
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/projects_arrow_left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/projects_arrow_right.svg"></button>'
});
});

$(document).ready(function(){
    $('.video_wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        centerMode: true,
        variableWidth: true,
        arrows: true,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: true,
                }
            },
            {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: true,
              }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                dots: true,
            }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/projects_arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/projects_arrow_right.svg"></button>'
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})


