require('dotenv').config();
const server = require('./server');

const port = process.env.Port || 4000;

server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
