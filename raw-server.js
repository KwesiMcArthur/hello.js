// raw server for testing purposes
const http = require("http");

const server = http.createServer((req, res) => {
  //req: Incoming request (method, url, headers)
  //res: Outgoing response (write, end)

  if (req.method === "GET" && req.url === "/") {
    //Manual route check
    res.writeHead(200, { "Content-Type": "text/plain" }); //Manual headers
    res.end("Hello from Raw Node.js!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found :(");
  }
});

const PORT = 3010;
server.listen(PORT, () => {
  console.log(`Raw server running on http://localhost:${PORT}`);
});
