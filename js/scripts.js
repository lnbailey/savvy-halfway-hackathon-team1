//ADD YOUR CUSTOM JAVASCRIPT AND jQUERY HERE
$('.gallery').on('click','img', function() {
  if($(this).hasClass('expanded')){

    $(this).animate({
        'width':'15%'
    },500).removeClass('expanded');
    $('img').not($(this)).animate({'opacity':'1'}, 500);

  } else {
     $(this).animate({
         'width':'50vh'
     },500).addClass('expanded');
     $('img').not($(this)).animate({'opacity':'0.2'}, 500);
  }
});
