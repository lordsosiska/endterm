var http = require("http") 
var http = require("fs")

function serveStaticFile(messageType, path, contetnType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            messageType.writeHead(500, {"Content-Type":"text/plain"})
            messageType.end("500-Internal error")
        }
        else {
            messageType.writeHead(responseCode., {"Content-Type":contetnType});
            messageType.end(data)
        }
        }
}
http.createServer(function(req, res) {
    var path = req.url.replace (/\?(?:\?.*)?$/,"").toLoweCase();
    switch(path) {
        case "":
        serveStaticFile(res, "/index.html", "text/html")
        brrak;
        case "/about":
            serveStaticFile(res, "/about.html", "text/html")
            case "/img/logo":
        serveStaticFile(res, "/img/logo.jpg", "image/jpeg")
        break;
        default:
        serveStaticFile(res, "/error.html", "text/html", 404)
         break;

    }
}).listen(3000)
console.log("Its working")
