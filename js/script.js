
var errorMessage="Sports News could not be loaded please try after some time !";

/*This method invokes itself for initial news feed
after that it checks for new feeds after a delay.
*/
(function loadSportsNews() {
	$.getJSON( "http://localhost:3000/sports", function(data) {
	//iterate if news array is not empty
	if(data && data.length >0 ){
	// sorting json by order field
	data.sort(function (a, b) {
    return a.order - b.order;
	});
	
	console.log( "success \n data received: " + JSON.stringify(data) );	
	//populate json data in html
	populateUI(data);	
	//refresh the news feed 
	//time in millisecond as per requirement 
    setTimeout(loadSportsNews, 100000);	
	}else{
		showError();		
	}
	 	
	})
	
	.done(function() {
		//console.log( "second success" );
	})
	  
	.fail(function(data) {
		console.log( "error" );
		if(data && data !=""){
	      showError();
		}
	})
	  
	.always(function() {
		//console.log( "complete" );
	});
	
}());

function populateUI(data){
	var trHtml ='';
		$.each(data, function (i, row) {
		if(row && row.url && row.heading){
		trHtml += '<li><a href="'+row.url+'">' + row.heading + '</a></li>';
		   }
		});
	  $("#sportsNews").html(trHtml);
}

function showError(){	
 $("#sportsNews").html('<p class="error">' + errorMessage + '</p>');
}
