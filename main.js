
$('.pagination a').click(function() {
  var destId = this.attributes.href.nodeValue;
  console.log(destId);
  
     $('html,body').animate({
       scrollTop: $(destId).offset().top},
       1000);
});
