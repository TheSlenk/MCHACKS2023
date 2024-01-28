const express = require('express');
const path = require('path');

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

// Serve static files from the 'views/pages' directory
app.use(express.static(path.join(__dirname, 'views/pages')));

app.get('/', async function (req, res) {
    try {
        const data = req.query;
        res.render('pages/demo', data);
    } catch (error) {
        console.error('Error getting demo page: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log(`Connected to http://localhost:3000`);
});
