// 15 - 学习使用 GET POST
var http  = require('http')
var fs = require('fs')
var url = require('url')
var router = require('./router')
var handler = require('./handle')
var querystring = require('querystring')
var handle = [];
handle['/'] = handler.home; 
handle['/home'] = handler.home; 
handle['/review'] = handler.review;
handle['/hehe'] = handler.hehe;

function startServer(route, handle) {
    var server = http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname
        var data = ""
        // 1.官方写法
        // var data = []
        request.on("error",function(err) {
            console.log(err) 
        }).on("data",function(chunk) {  
            data += chunk
            // 1.官方写法
            // data.push(chunk)
        }).on('end', function(){
            if(request.method === "POST") {
                // 1.官方写法
                // data = Buffer.concat(data).toString()
                route(handle, pathname, response, querystring.parse(data))
            } else { 
                // 获取参数 获取GET方法传过来的参数
                var params = url.parse(request.url, true).query; // 如果这里为false的时候，得到的就是字符串"a=55&b=99" 如果是true时候，为 { a = 55, b = 99}
                console.log('Request received' + pathname)
                route(handle, pathname, response, params)     
            }
        })
        

    })
    server.listen(3456) 
}

startServer(router.route,handle)