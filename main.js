var scrollTop = $(window).scrollTop();
$('.pagination a').click(function() {
  var destId = $(this.attributes.href.nodeValue);
  var thisTop = $(destId).offset().top;
  var elOffset = (thisTop - scrollTop);
  console.log(elOffset);
  console.log(scrollTop);
  console.log(thisTop);
     $('html,body').animate({scrollTop: thisTop + elOffset }, 500);
});
