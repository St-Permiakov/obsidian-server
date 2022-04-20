import express from 'express';
import expressMd from 'express-md';
import styles from './colors';

const PORT = 8080;

const app = express();

const mdRouter = expressMd({
  dir: `${__dirname}/docs`,
  url: '/',
  vars: { message: 'Hello, world!' }
})

app.use(mdRouter);

app.listen(PORT, () => {
  console.log(`${styles.font.green}Express server listening on port ${styles.font.blue}${PORT}${styles.reset}`);
})
