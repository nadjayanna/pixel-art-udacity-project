$('select[name="colorpicker"]').simplecolorpicker();

function makeGrid(){
	$('#table').empty();

	const rows = $('#gridHeight').val();
  const cols = $('#gridWidth').val();
  
  let table_body = '<table>';
  
  for(let i=0; i<rows; i++){
    table_body+='<tr>';
    for(let j=0;j<cols;j++){
      table_body +="<td class='square'></td>";
    }
    table_body+='</tr>';
  }
  table_body+='</table>';
  
  $('#table').html(table_body);
  $(".square").on( "click", squareColorHandler );
}

function squareColorHandler( event ) {
  $(this).css('background-color', $('select[name="colorpicker"]').val());
}
