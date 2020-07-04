function initializeTable(){

    $("#createLink").on("click",addRows);

     function  addRows(){
          let row1=$("<tr>")
                    .append($("<td>").text("Sweden"))
                    .append($("<td>").text("Stockholm"))
                    .append($("<a href='#'>[Up]</a>").click(moveRowUp))
                    .append($("<a href='#'>[Down]</a>").click(moveRowDown))
                    .append($("<a href='#'>[Delete]</a>").click(deleteRow));
        row1.css("background","#ddd");
         let row2=$("<tr>")
                    .append($("<td>").text("Germany"))
                    .append($("<td>").text("Berlin"))
                    .append($("<a href='#'>[Up]</a>").click(moveRowUp))
                    .append($("<a href='#'>[Down]</a>").click(moveRowDown))
                    .append($("<a href='#'>[Delete]</a>").click(deleteRow));
         row2.css("background","#ddd");

         let row3=$("<tr>")
                    .append($("<td>").text("France"))
                    .append($("<td>").text("Paris"))
                    .append($("<a href='#'>[Up]</a>"))
                    .append($("<a href='#'>[Down]</a>"))
                    .append($("<a href='#'>[Delete]</a>"));
        row3.css("background","#ddd");
        
            $("#countriesTable").append(row1).append(row2);

            HideUpDownLinks();
     }

     
     function  HideUpDownLinks(){

        $("#countriesTable a").css("display","inline");

        $("#countriesTable tr:nth-child(3) a:contains('Up')").css("display", "none");
        
        $("#countriesTable tr:last-child a:contains('Down')").css("display", "none");
        
      } 
      

      function deleteRow(){
           //Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
          let delRow=$(this).parent();
          delRow.remove();
      }
      function moveRowDown(){
        let downRow=$(this).parent();
        downRow.insertAfter(downRow.next());
        HideUpDownLinks();
        }
    function moveRowUp(){
        let upRow=$(this).parent();
        upRow.insertBefore(upRow.prev());
        HideUpDownLinks();
        
        }
        /* let upRow=$(this).parent().parent();
        upRow.fadeOut(function (){
            upRow.prev().before(row);
            upRow.fadeIn();
            HideUpDownLinks();
         */
    }
