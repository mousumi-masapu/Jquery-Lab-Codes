function attachEvents(){
    $("#items li").on("click",select);
    $("#showCitiesButton").on("click", show);
 function select(){
     //$(this) is a jQuery wrapper around that element that enables usage of jQuery methods.
     let li=$(this);
     //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
     if(li.attr("data-selected")){
         //$('#liID').attr('attributeToChange', 'valueToSet');
         li.removeAttr("data-selected");
         li.css("background","");
     }else{
            li.attr("data-selected","true");
            li.css("background","#ddd");
        }
     }
     function show() {
        let selectedlLi = $("#items li[data-selected=true]");
        let selectedCities = selectedlLi.toArray()
            .map(li=>li.textContent)
            .join(", ");
        $("#selectedCities").text("Selected cities: " + selectedCities );
    }
     
 }

