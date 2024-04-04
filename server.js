const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Social Network API');
});

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Social Network API server running on port ${PORT}`);
  });
});
