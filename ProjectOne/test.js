"use strict";

//Jquery request.

(function() {

	// var url = "https://developers.zomato.com/api/v2.1/cuisines?city_id=3059";
	// var apiKey = "c5d3000aa27c15341e4ef99bcd037e51";
    
    // $.get(url + apiKey).done(function(response) {
    //     console.log(response);

    //     updateUISuccess(response);
    // }).fail(function(error) {
    //     console.log(error);

    //     // updateUIError();
    // })

// Handle XHR succes.

// function updateUISucces(response) {
//     break;
// }
// Handle XHR failure.

// function updateUIError()

$.ajax({
    url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=3059',
    headers: {
        'user-key':'c5d3000aa27c15341e4ef99bcd037e51',
       
    },
    method: 'get',
    dataType: 'json',
    
    success: function(data){
      console.log('succes: '+ JSON.stringify(data));
    }
  });

})();