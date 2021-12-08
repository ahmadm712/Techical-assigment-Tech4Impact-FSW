const http = require("http");
const port = 3005;

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.write("Hello world");
    res.end();
  } else if (req.url == "/about") {
    res.write("Welcome to about us page");
    res.end();
  } else if (req.url == "/contact") {
    res.write("Welcome to contact us page");
    res.end();
  } else {
    res.write("Hello World!");
    res.end();
  }
});

server.listen(port, () => {
  console.log("Server created at port", port);
});
