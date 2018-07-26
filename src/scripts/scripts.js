window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

window.scrollBy({
  top: 100,
  left: 0,
  behavior: 'smooth'
});

$(document).ready(function () {
  $('ul.tabinator li').click(function () {
    var tab_id = $(this).attr('data-target');

    $('ul.tabinator li').removeClass('current');
    $('.tab__content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});