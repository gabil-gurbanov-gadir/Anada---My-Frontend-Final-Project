$(document).ready(function() {
    // Start Nav-Menu 
    $('ul.navbar-nav li.dropdown').each(function(elem) {
            $(this).on('mouseenter', function(e) {
                $(this).children()[1].style.top = "100%";
                $(this).children()[1].style.opacity = "1";
                $(this).children()[1].style.visibility = "visible";
            });
            $(this).on('mouseleave', function() {
                $(this).children()[1].style.top = "75%";
                $(this).children()[1].style.opacity = "0";
                $(this).children()[1].style.visibility = "hidden";
            })
        })
        // End Nav-menu
})