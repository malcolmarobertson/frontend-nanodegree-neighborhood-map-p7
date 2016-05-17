$("#menu-toggle").click(function(e) {        
   e.preventDefault();                  
   $("#wrapper").toggleClass("toggled");
   $('img',this).toggle();
});


function googleMapError() {
	$('.map_container').html('Could not connect to Google Maps API');
};
                                