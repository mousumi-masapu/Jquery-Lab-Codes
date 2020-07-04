function extractText(){
   //Retrieve all the elements contained in the jQuery set, as an array.
   //map :Translate all items in an array or object to new array of items.jQuery.map( array, callback)
   //The textContent property sets or returns the text content of the specified node, and all its descendants.
   let liItems= $("ul#items li").toArray().map(li => li.textContent).join(",");
   $("#result").text(liItems);

}