//ADD YOUR CUSTOM JAVASCRIPT AND jQUERY HERE
$('.gallery').on('click', 'img', function() {
   $(this).animate({
       'height':'120%'
   },500); 
});