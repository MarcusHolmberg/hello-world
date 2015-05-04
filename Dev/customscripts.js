function test(){
	$( "a" ).click(function(event) {
        $( "a" ).addClass( "test" );
        event.preventDefault();
    });
}