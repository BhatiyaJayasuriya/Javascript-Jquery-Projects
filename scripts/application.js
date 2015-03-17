
$( document ).ready( function () {
  	var gridWidth = 40, gridHeight = 40;
	var i , j , gridSize;
	
	gridSize = 16;
  		
  	createGrid();

	try {

		function createGrid() {
			// loop through to create the grid
			// and append to #container div
			var cont = $( '#container'  );
			for( i  = 0 ;  i < gridSize ; i++) { // creates the y grid
				for (  j  = 0 ;  j < gridSize ;  j++ ) { // creates the x grid
					$( cont ).append( '<div class="grid"></div>' );
					//$( '#container' ).append( '<div class="grid"></div>' );
				}
			}
			//apply height/width to new div
			$( ".grid" ).width( gridWidth ).height( gridHeight );
			$( '.showGridSize' ).html( 'Current grid is: <strong>'  + gridSize + ' x ' + gridSize + '</strong>' );
			return true;
		}

	  	// add highlighting when mouseenter
		 $( '#container' ).on( "mouseenter", ".grid", function() {
		 	
		 	$( this ).addClass( 'hightlight' );

		 });


	  	$( '#reset' ).click( function() {
	  		
	  		var getGrid = parseInt( prompt( "Please enter a grid value between '2 - 100'. ", "16" ) );

	  		if ( getGrid >= 2 || getGrid <= 100 ) {

	  			calWidthHeight( getGrid );
	  			// re-assign new values
	  			gridHeight = gridWidth;
	  			gridSize = getGrid; 
			  	//remove the existing grid and recreate it with new values
			  	$( '.grid' ).remove();
			  	createGrid();

	  		} else {

	  			alert( 'Please enter a number between 2-100.' );
	  			// terminate further execution of code
	  			throw '';

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