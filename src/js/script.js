$(document).ready(function() {
    var sections = $('.page');
    var index = 0;
    var isAnimating = false;

    $(window).on('wheel', function(e) {
        if (isAnimating) return;
        isAnimating = true;

        if (e.originalEvent.deltaY > 0) {
            // Scrolling down
            if (index < sections.length - 1) {
                index++;
            }
        } else {
            // Scrolling up
            if (index > 0) {
                index--;
            }
        }
        scrollToSection(index);
    });

    function scrollToSection(index) {
        var position = sections.eq(index).offset().top;
        $('html, body').animate({
            scrollTop: position
        }, {
            duration: 900,
            easing: 'easeInOutCubic',
            complete: function() {
                isAnimating = false;
            }
        });
    }

    // Initial background color for the first section
    $('body').css('background-color', sections.eq(0).css('background-color'));
});