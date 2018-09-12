var fs = require('fs');
function home(response, params) {
	console.log("Excuting 'home' handler")
	console.log(params)
	response.writeHead(200, {
		'Content-Type': 'text/html;charset=utf-8'
	}); //如果我们不想输出html.输出纯文本的话,用text/plain
	fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
}
 
function review(response, params) {
    console.log("Excuting review")
    console.log(params)
}

function hehe(response, params) {
	response.writeHead(200, {
		'Content-Type': 'text/json;charset=utf-8'
	}); //如果我们不想输出html.输出纯文本的话,用text/plain
    response.end(JSON.stringify(params))
}

module.exports = {
	home : home,
	review : review,
	hehe : hehe
}