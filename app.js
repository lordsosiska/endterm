
const server = require("http");
const path = require("path")
const app = (responseData, callback) => {
  
  callback(200, '{"message":"Have a nice day!"}');
}

app.get("/img/gallery/cat", req, res) => {
    res.status(200)
    res.contenType("image/png");
    res.sendFile(path.join(__dirname, "/https://www.dlf.pt/dfpng/middlepng/220-2205132_very-sad-cat-sad-cat-meme-png-transparent.png")) //dirname = C:Users/a1/Desktop/endterm + index.html

}

app.get("/img/gallery/dog", req, res) => {
    res.status(200)
    res.contenType("image/png");
    res.sendFile(path.join(__dirname, "/https://i.dlpng.com/static/png/5198291-sad-dog-png-transparent-sad-dog-png-image-free-download-pngkey-sad-dog-png-300_212_preview.png"))

}

app.get("/video/ыфьзду", req, res) => {
    res.status(200)
    res.contenType("video/mp4");
    res.sendFile(path.join(__dirname, "/https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=video&cd=&cad=rja&uact=8&ved=2ahUKEwjonoSsma3vAhVh_CoKHYyPBq4QuAIwA3oECAkQBg&url=https%3A%2F%2Fwww.appsloveworld.com%2Fdownload-sample-mp4-video-mp4-test-videos%2F&usg=AOvVaw3Pc_AGE7HxShj9D-lI6QaQ"))


server.setAllowedPaths(paths);
// Start the server
server.init(3000);


