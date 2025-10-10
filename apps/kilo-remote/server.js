const http = require('http');

http.createServer((req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Cache-Control, X-Requested-With',
      'Access-Control-Max-Age': 86400, // cache preflight for 24h
    });
    return res.end();
  }

  if (req.url === '/stream') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    });

    let id = 0;
    const interval = setInterval(() => {
      const message = {
        id: id.toString(),
        text: `Message ${id}`,
        sender: 'server',
      };
      res.write(`data: ${JSON.stringify(message)}\n\n`);
      id++;
    }, 1000);

    req.on('close', () => {
      clearInterval(interval);
    });
  } else {
    res.writeHead(404, {
      'Access-Control-Allow-Origin': '*',
    });
    res.end();
  }
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
