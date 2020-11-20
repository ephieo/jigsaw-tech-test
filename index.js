const app = require('./src/index.js');

const port = 3000;

app.listen(port, () =>
  console.log(`Listening on ${port} at http://localhost:3000/`)
);
