function search(){
    //Get the current value of the first element in the set of matched elements or set the value of every matched element
   let searchText=$("#searchText").val();
   let noOfmatches =0;
   //index:Search for a given element from among the matched elements.
   //Iterate over a jQuery object, executing a function for each matched element.
   //The textContent property sets or returns the text content of the specified node, and all its descendants.
   $("#towns li").each((index,item)=> { 
       if(item.textContent.includes(searchText)){
//Set one or more CSS properties for every matched element.
       $(item).css("font-weight","bold");
       noOfmatches++;
    }else{
        $(item).css("font-weight","");
    }
});
$("#result").text(noOfmatches + " matches found.");
$("#searchText").val("");
}