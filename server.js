const http = require('http');

const server = http.createServer((req, res) => {
  // Without the 'res.end()', the response will hang indefinitely
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Missing res.end() here! 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});