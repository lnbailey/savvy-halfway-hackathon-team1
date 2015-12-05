//ADD YOUR CUSTOM JAVASCRIPT AND jQUERY HERE
$('.gallery').on('click','img', function() {
   $(this).animate({
       'width':'50vh'
   },500); 
});