
$(document).ready(function(){
  	var gridWidth = 40, gridHeight = 40;
	var i, j, gridSize;
	
	gridSize = 16;
  		
  	createGrid();
	try {

		function createGrid() {
			// loop through to create the grid
			// and append to #container div
			for( i = 0;  i < gridSize; i++) { // creates the y grid
				for (  j = 0;  j < gridSize;  j++ ) { // creates the x grid
					$( '#container' ).append( '<div class="grid"></div>' );
				}
			}
			//apply height/width to new div
			$( ".grid" ).width( gridWidth ).height( gridHeight );
			$( '.showGridSize' ).html( 'Current grid is: <strong>'  + gridSize + ' x ' + gridSize + '</strong>' );
			return true;
		}

	  	// add highlighting when mouseover
		 $( '#container' ).on( "mouseover", ".grid", function() {
		 	
		 	$( this ).addClass( 'hightlight' );
		 	
		 });


	  	$( '#reset' ).click( function() {
	  		//$('.grid').removeClass('hightlight');
	  		var getGrid = parseInt( prompt( "Please enter a grid value between '2 - 100'. ", "16" ) );
	  		
	  		if ( getGrid !== null ) {

	  			if ( getGrid < 2 || getGrid > 100 ) {

	  				alert('Please enter a number between 2-100.');

	  			} else {

	  				calWidthHeight( getGrid );
	  				// re-assign new values
	  				gridHeight = gridWidth;
	  				gridSize = getGrid; 
			  		//remove the existing grid and recreate it with new values
			  		$( '.grid' ).remove();
			  		createGrid();

	  			}

	  		} else {

	  			alert('Please enter a number between 2-100.');
	  		}

	  		
	  	});

		var calWidthHeight = function( input ){
			gridWidth = ( 640/input );
			return gridWidth;
		}


	} catch (err) {
		alert(err.message);
	}
  	
});