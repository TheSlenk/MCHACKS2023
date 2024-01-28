const express = require('express');
const path = require('path');

const app = express();
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./views"));

// Serve static files from the 'views/pages' directory
app.use(express.static(path.join(__dirname, 'views/pages')));

app.get('/', async function (req, res) {
    try {
        const data = req.query;
        res.sendFile(path.join(__dirname, 'views/pages/home.html'));
    } catch (error) {
        console.error('Error getting home page: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/demo', async function (req, res) {
    try {
        const data = req.query;
        res.sendFile(path.join(__dirname, 'views/pages/demo.html'));
    } catch (error) {
        console.error('Error getting demo page: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log(`Connected to http://localhost:3000`);
});
