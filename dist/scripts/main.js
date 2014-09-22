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