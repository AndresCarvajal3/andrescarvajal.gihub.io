$(document).ready(listo);

function listo () { 

 $("header .contenedor nav a").click(function(){
   var a = $(this).attr("href");
   $("html,body").animate({
        "scrollTop": $(a).position().top - 50
   });
 });
  

};
  