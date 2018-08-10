/** 
* Call to implement the simplecolorpicker changes at the selector 
* Stolen from {https://github.com/tkrotoff/jquery-simplecolorpicker} by Tanguy Krotoff <tkrotoff@gmail.com>
*/
$('select[name="colorpicker"]').simplecolorpicker();

/** On submit create the table that will be use to color**/
function makeGrid(){

  //clean the html inside the div #table in case this is not the first use of the function
  $('#table').empty();

  const rows = $('#gridHeight').val();
  const cols = $('#gridWidth').val();
  
  let table_body = '<table>';

  //create the table with the amount of rows and columns provide by the input fields  
  for(let i=0; i<rows; i++){
    table_body+='<tr>';
    for(let j=0;j<cols;j++){

      /** square classe to make the css difinition of the squares properties 
        and used to identify the square elements for listeners **/
      table_body +="<td class='square'></td>";
    }
    table_body+='</tr>';
  }
  table_body+='</table>';
  
  $('#table').html(table_body);

  //create a listener to each square
  $(".square").on( "click", squareColorHandler );
}

/** Handler for the square click that change the color of the square **/
function squareColorHandler( event ) {
  $(this).css('background-color', $('select[name="colorpicker"]').val());
}

/** Media querys to change the max width and height of the grid depending on the screen **/
function mediaHandler () {
  if(window.matchMedia("(max-width: 425px)").matches){
    $('#gridHeight').attr('max', '15');
    $('#gridWidth').attr('max', '15');
  }else if (window.matchMedia("(min-width: 426px)").matches && window.matchMedia("(max-width: 767px)").matches){
    $('#gridHeight').attr('max', '20');
    $('#gridWidth').attr('max', '20');
  }else if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1023px)").matches) {
    $('#gridHeight').attr('max', '25');
    $('#gridWidth').attr('max', '25');
  }else if (window.matchMedia("(min-width: 1024px)").matches && window.matchMedia("(max-width: 1335px)").matches) {
    $('#gridHeight').attr('max', '35');
    $('#gridWidth').attr('max', '35');
  }else {
    $('#gridHeight').attr('max', '40');
    $('#gridWidth').attr('max', '40');
  }
}

/** Event to call the media query if the screen is resize **/
$(window).resize(function( event ) {
  setTimeout(function() {mediaHandler ()}, 0);
});

mediaHandler ();