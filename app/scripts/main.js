var flickrUrl = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=cda189c50310b7c6d848431b48d44b2d&format=json&tags=bike,bicycles,bikes,bicycle&safe_search=1&per_page=3&jsoncallback=?'

function reusableFunction(container, templateID, model) {
    var templateFunction = _.template($('#' + templateID).text());
    var renderTemplate = templateFunction(model);
    $(container).append(renderTemplate);
}

$.ajax( {
	type: 'GET',
	url: flickrUrl,
	dataType: 'json'
}).done(function(images){
	_.each(images.photos.photo, function(image) {
		reusableFunction('.images', 'images-template', image);
	});
});

// var googUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBw4K03wb2-iZFymKEeU3hx9dBgp7iJGXk">

// $.ajax({
// 	url: googUrl,
// 	type: 'GET',
// 	dataType: 'json',
// 	center: {lat: 34.846791, lng: -82.402418},
//     zoom: 11
// })
// .done(function(maps){
// 	var map = new google.maps.Map(document.getElementById('mapped'),
//  	maps);
// })
// .done(function(loading) {
//   	google.maps.event.addDomListener('mapped', 'load', maps);
//   });


// // function mapping () {
// //   var mapOptions = {
// //     center: new google.maps.LatLng (34.846791, -82.402418),
// //     zoom: 11
// //   };

