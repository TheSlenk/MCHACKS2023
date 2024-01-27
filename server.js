const express = require('express');
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.json());
app.use(express.static('views'));

app.get('/', async function (req, res) {
    try {
      res.render('pages/demo');
    } catch (error){
      console.error('Error getting demo page: ', error);
      res.status(500).send('Internal Server Error');
    }
  });
app.listen(3000);
console.log(`Connected to http://localhost:3000`);
