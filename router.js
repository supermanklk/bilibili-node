function route(handle,pathname,response, params) {
	console.log('Routing a request for ' + pathname);
	if(typeof handle[pathname] === "function") {
		handle[pathname](response, params);
	}else{
		console.log('404');
	}
} 
 
module.exports.route = route;