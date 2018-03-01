$(document).ready(function(){
  $("#menuopen").click(function(){
  $("aside").animate({"top":0},500);
  });
  $("#closemenu").click(function(){
  $("aside").animate({"top":"-10\%"},500);
  });
});
