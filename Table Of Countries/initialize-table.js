function initializeTable(){
    $("#createLink").on("click",createCountry);
    function createCountry(){
     let country=$("#newCountryText").val();
     let capital=$("#newCapitalText").val();
     addCountryInRow(country,capital,true);
     $("#newCountryText").val("");
     $("#newCapitalText").val("");
    HideUpDownLinks();
    }
    function addCountryInRow(country,capital){
        let addRow=$("<tr>")
        .append($("<td>").text(country))
        .append($("<td>").text(capital))
        .append($("<a href='#'>[Up]</a>").click(moveRowUp))
        .append($("<a href='#'>[Down]</a>").click(moveRowDown))
        .append($("<a href='#'>[Delete]</a>").click(deleteRow));
        addRow.css("background", "#ddd");
       $("#countriesTable").append(addRow);
    }
    function  HideUpDownLinks(){
        $("#countriesTable a").css("display","inline");
        let tableRows=$("#countriesTable tr");
        $(tableRows[2]).find("a:contains('Up')").css("display", "none");
        $(tableRows[tableRows.length-1]).find("a:contains('Down')").css("display", "none");
    }
      function deleteRow(){
           //Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
          let delRow=$(this).parent();
          delRow.remove();
          HideUpDownLinks();
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
    }
