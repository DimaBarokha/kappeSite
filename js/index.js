$(function () {
    "use strict";
    $('#info').click(function () {
        $('#info_box').toggleClass('open');
    });
    $('.about-info__diagramm__data_percent').each(function () {
        let width = $(this).data('skill'); //берем из даты скилл
        $(this).css('width', width + "%");
    });
});
