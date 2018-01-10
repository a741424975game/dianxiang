(function ($) {

    $(document).ready(function () {
        $('.slide').prepend('<div class="patternOverlay"></div>');

        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 6000);
        });

        $('.skillbar').each(function () {
            $(this).find('.skill-bar-percent').animate({
                left: $(this).attr('data-percent')
            }, 6000);
        });

        $('.skillbar').each(function () {
            $(this).find('.skill-bar-percent').text($(this).attr('data-percent'));
        });

        if ($(window).width() > 767) {
            $('.navbar-wrapper').animate({
                opacity: 0
            }, 200);
            $('.navbar-wrapper').addClass('default-menu');

        }

        $('#nav-show').click(function (x) {
            x.preventDefault();
            $('.wrapper').removeClass('noGap');
            $('.navbar-wrapper').animate({
                opacity: 1
            }, 200);
            $('.navbar-wrapper').removeClass('default-menu');
            $(this).fadeOut();
        });

        $('.closeMenu').click(function (x) {
            x.preventDefault();
            $('.navbar-wrapper').animate({
                opacity: 0
            }, 50, function () {
                $('.navbar-wrapper').addClass('default-menu');
            });

            $('#nav-show').fadeIn();
        });

    });


    // menu
    function resize_menu() {
        var stickyHeight = parseInt($('.navbar-wrapper').height());
        var stickyMarginB = parseInt($('.navbar-wrapper').css('margin-bottom'));
        var currentMarginT = parseInt($('.navbar-wrapper').next().closest('div').css('margin-top'));
        if ($(window).width() < 500) {
            $('.wrapper').addClass('spHeight');
            $('.stuckMenu').addClass('isStuck');
            $('.stuckMenu').next().closest('div').css({
                'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'
            }, 10);
        }
        ;

        if ($(window).width() > 500) {
            $('.wrapper').removeClass('spHeight');
            $('.stuckMenu').removeClass('isStuck');
            $('.stuckMenu').next().closest('div').css({
                'margin-top': currentMarginT + 'px'
            }, 10);
        }
        ;
    }

    window.onresize = resize_menu;

    /*===========================================================*/
    /*	Preloader
    /*===========================================================*/
//<![CDATA[
    $(window).load(function () { // makes sure the whole site is loaded
        $("#status").delay(2000).fadeOut(); // will first fade out the loading animation
        $("#preloader").delay(2000).fadeOut(3000); // will fade out the white DIV that covers the website.
    })
//]]>

// for mobile nav js	
    $(window).load(function () {
        $('button.navbar-toggle').click(function () {
            $(this).toggleClass('active');
            $('.navbar-collapse').slideToggle();
        });
        resize_menu();
    });
// for banner height js
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $('.banner').css({'height': windowHeight});


// for portfoli filter jquary
    $(window).load(function () {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });


// for portfoli lightbox jquary
        jQuery(function () {
            var $chosenSheet,
                $stylesheets = $("a[id^=theme-]");

            // run rlightbox
            $(".lb").rlightbox();
            $(".lb_title-overwritten").rlightbox({overwriteTitle: true});
        });
    });

// Somth page scroll
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

//Round Play
    $(function () {

        var dur = 3000;
        var pDur = 3000;

        $('.carousel').carouFredSel({
            items: {
                visible: 1,
                width: 1920,
                height: 1080
            },
            scroll: {
                fx: 'fade',
                easing: 'linear',
                duration: dur,
                timeoutDuration: pDur,
                onBefore: function (data) {
                    data.items.visible.first().addClass('trans')
                },
                onAfter: function (data) {
                    $(this).children().last().removeClass('trans')
                }
            },
            onCreate: function (data) {
                $(this).children().first().addClass('trans')
            }
        });

        function animate(item, dur) {
            var obj = {
                width: 1920 * 1.2,
                height: 1080 * 1.2
            };
            switch (Math.ceil(Math.random() * 2)) {
                case 1:
                    obj.marginTop = 0;
                    break;
                case 2:
                    obj.marginTop = -120;
                    break;
            }
            switch (Math.ceil(Math.random() * 2)) {
                case 1:
                    obj.marginLeft = 0;
                    break;
                case 2:
                    obj.marginLeft = -200;
                    break;
            }
            item.animate(obj, dur, 'linear');
        }

    });


}(jQuery));


