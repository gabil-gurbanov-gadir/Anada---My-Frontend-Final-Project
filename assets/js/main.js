$(document).ready(function() {
    window.addEventListener('load', (event) => {
        document.querySelector("#preloader").classList.add("d-none");
    });
    // Start Nav-menu
    $(document).on('scroll', function(e) {
        if (window.scrollY > 0) {
            $('#nav').css("position", "fixed");
        } else if (window.scrollY == 0) {
            $('#nav').css("position", "absolute");
        }
    });
    if ($(document).scrollTop() > 0) {
        console.log("artdi" + $(document).scrollTop());
    }
    $('ul.navbar-nav li.dropdown').each(function(elem) {
        $(this).on('mouseenter', function(e) {
            $(this).children('ul.dropdown-menu').addClass('show');
            $(this).children('a.nav-link').css('--myVar', `"\f106"`);
            console.log($(this).children('a.nav-link'));
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
})