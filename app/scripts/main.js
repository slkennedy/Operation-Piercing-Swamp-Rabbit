function reusableFunction(container, templateID, model) {
    var templateFunction = _.template($('#' + templateID).text());
    var renderTemplate = templateFunction(model);
    $(container).append(renderTemplate);
}

$.ajax('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=cda189c50310b7c6d848431b48d44b2d&format=json&tags=bike,bicycles,bikes,bicycle', {
	type: 'GET',
	datatype: 'json'
}).done(function(images){
	_.each(function(image){
		console.log(image)
		reusableFunction('.images', 'images-template', image);
	});
});
