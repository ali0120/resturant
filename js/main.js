$(function () {
    'use strict';
    // this to fire oul-carousel plugin it use in news section //
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // end oul-carousel plugin it use in news section //
    // start slider //
    var Page = (function () {

        var $navArrows = $('#nav-arrows'),
            $nav = $('#nav-dots > span'),
            slitslider = $('#slider').slitslider({
                onBeforeChange: function (slide, pos) {

                    $nav.removeClass('nav-dot-current');
                    $nav.eq(pos).addClass('nav-dot-current');

                }
            }),

            init = function () {

                initEvents();

            },
            initEvents = function () {

                // add navigation events
                $navArrows.children(':last').on('click', function () {

                    slitslider.next();
                    return false;

                });

                $navArrows.children(':first').on('click', function () {

                    slitslider.previous();
                    return false;

                });

                $nav.each(function (i) {

                    $(this).on('click', function (event) {

                        var $dot = $(this);

                        if (!slitslider.isActive()) {

                            $nav.removeClass('nav-dot-current');
                            $dot.addClass('nav-dot-current');

                        }

                        slitslider.jump(i + 1);
                        return false;

                    });

                });

            };

        return {
            init: init
        };

    })();

    Page.init();

    $('.navbar .home').click(function () {
        $('html,body').animate({
            scrollTop: $('.header1').offset().top
        }, 2000);
    });

    $('.navbar .about').click(function () {
        $('html,body').animate({
            scrollTop: $('#about').offset().top
        }, 2000);
    });
    $('.navbar .menu').click(function () {
        $('html,body').animate({
            scrollTop: $('#menu').offset().top
        }, 2000);
    });
    $('.navbar .team').click(function () {
        $('html,body').animate({
            scrollTop: $('#team').offset().top
        }, 2000);
    });
    $('.navbar .book').click(function () {
        $('html,body').animate({
            scrollTop: $('#book').offset().top
        }, 2000);
    });

});
