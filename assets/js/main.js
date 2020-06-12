$(document).ready(function() {
    window.addEventListener('load', (event) => {
        document.querySelector("#preloader").classList.add("d-none");
        // Start Nav-menu
        $(document).on('scroll', function(e) {
            if (window.scrollY > 0) {
                $('#nav').css("position", "fixed");
            } else if (window.scrollY == 0) {
                $('#nav').css("position", "absolute");
            }
        });
        $('ul.navbar-nav li.dropdown').each(function(elem) {
            $(this).on('mouseenter', function(e) {
                $(this).children('ul.dropdown-menu').addClass('show');
            });
            $(this).on('mouseleave', function() {
                $(this).children('ul.dropdown-menu').removeClass('show');
            })
        });
        $('#searchBtn').click(function(e) {
            e.preventDefault();
            $('#searchBtn').next().toggleClass('show');
        })
        $('#sideBarBtn').click(function(e) {
            e.preventDefault();
            $('#sideBarBtn').next().toggleClass('on');
        })
        $('.close-side').click(function(e) {
                e.preventDefault();
                $('#sideBarBtn').next().toggleClass('on');
            })
            // End Nav-menu

        // Start Main

        $('.feature-carousel').owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            dots: true,
            autoplay: true,
            items: 1,
            responsive: {
                1000: {
                    stagePadding: 100,
                }
            }
        });
        wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: true, // default
            live: true // default
        });
        wow.init();

        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });
    });
})