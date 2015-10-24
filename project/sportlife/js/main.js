$(function () {

    //
    // header menu
//    var $headerPanel = $('.header-panel'),
//        headerPanelHeight = $headerPanel.height();
//
//    $(window).on('scroll', function(){
//        var $this = $(this);
//
//        if ($this.scrollTop() > headerPanelHeight) {
//            $('body').addClass('__fixed-header-panel');
//        } else {
//            $('body').removeClass('__fixed-header-panel');
//        }
//    });

    //
    // search like apple.com
    var $searchPanel = $('.header-panel_search'),
        $searchToggler = $searchPanel.find('.header-panel_search_ic'),
        $searchField = $searchPanel.find('.header-panel_search_it');

    $searchToggler.on('click', function(){
        $searchPanel.addClass('__focus');
        $searchField.focus();
    });

    $searchField.on('blur', function(){
        $searchPanel.removeClass('__focus');
    });


    //
    // demo modal
    $(document).on('click', '.modal_close, .modal_overlay', function(){
        $('.modal').removeClass('__active');
    });

    //
    // accordion
    $('.accordion_h').on('click', function() {
        var $this = $(this);
        $this.parent().toggleClass('__active');
    });

    //
    // demo payment
    $(document).on('click','.form-widget_i_radio', function(){
        var $this = $(this),
            $wrapper = $this.closest('.grid');

        $wrapper.find('.form-widget:not(.__disabled)').addClass('__disabled');
        $this.closest('.form-widget').removeClass('__disabled');
    });

    //
    // brand slider
    var $slider =  $('.slider');
    if ($slider.length) {
        $slider.bxSlider({
            slideWidth: 145,
            slideMargin: 10,
            pager: false,
            minSlides: 7,
            maxSlides: 7,
            prevSelector: $('.js-prev'),
            nextSelector: $('.js-next')
        });
    }


    //
    // demo main slider
    var $mainSlider = $('.main-slider'),
        $sliderWrapper = $mainSlider.find('.main-slider_cnt'),
        $slides = $sliderWrapper.find('.main-slider_i'),

        $sliderNav = $('.main-slider_nav'),
        $sliderNavItem = $sliderNav.find('.main-slider_nav_i'),

        CSS_CLASS_ACTIVE = "__active"
        ;


    $sliderNav.on('click', '.main-slider_nav_i', function(){
        var $this = $(this),
            indexOfSlide = $this.index();

        $sliderNavItem.removeClass(CSS_CLASS_ACTIVE);
        $this.addClass(CSS_CLASS_ACTIVE);

        $slides
            .removeClass(CSS_CLASS_ACTIVE)
            .eq(indexOfSlide).addClass(CSS_CLASS_ACTIVE);
    });

});