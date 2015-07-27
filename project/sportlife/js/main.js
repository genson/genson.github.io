$(function () {

    //
    // header menu
    var $headerPanel = $('.header-panel'),
        headerPanelHeight = $headerPanel.height();

    $(window).on('scroll', function(){
        var $this = $(this);

        if ($this.scrollTop() > headerPanelHeight) {
            $('body').addClass('__fixed-header-panel');
        } else {
            $('body').removeClass('__fixed-header-panel');
        }
    });

    //
    // search like apple.com
    var $searchPanel = $('.header-panel_search'),
        $searchToggler = $searchPanel.find('.header-panel_search_ic'),
        $searchField = $searchPanel.find('.header-panel_search_it');

    $searchToggler.on('click', function(){
        $searchToggler.addClass('__hidden');
        $searchPanel.addClass('__focus');
        $searchField.focus();
    });

    $searchField.on('blur', function(){
        $searchPanel.removeClass('__focus');
        $searchToggler.removeClass('__hidden');
    });

    //
    // brand slider
    $('.slider').bxSlider({
        slideWidth: 145,
        slideMargin: 10,
        pager: false,
        minSlides: 7,
        maxSlides: 7
    });
});