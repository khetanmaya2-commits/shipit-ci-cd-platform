
const http = require('http');

//node.js code for our application
//jenkins- factoy automation-system 
//app.js- product being manufactured and delivered

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
            status: 'healthy',
            application: 'ShipIt'
        }));
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h1>ShipIt CI/CD Platform</h1>
        <p>Application deployed successfully and configured!</p>
        <p>Automated with Jenkins, Docker and AWS.</p>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`ShipIt running on port ${PORT}`);
});

module.exports = server;
