function attachEvents(){

   $("a.button").on("click",buttonClicked);
   
 function buttonClicked(){
     $(".selected").removeClass("selected");
     //$(this) is a jQuery wrapper around that element that enables usage of jQuery methods.
     $(this).addClass("selected");
 }
}