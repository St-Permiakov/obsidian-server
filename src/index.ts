import http = require('http');
import styles from './colors';

const PORT = 8080;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);

console.log(`${styles.font.green}Server is ready on port ${styles.font.blue}${PORT}${styles.reset}`);

server.listen(PORT);
