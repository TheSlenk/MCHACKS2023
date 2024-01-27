const express = require('express');
const app = express();

app.use(express.static('script'));
app.set('view engine', 'pug');
app.set('views', 'view');

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.status(200).render('home');
});

app.listen(3000);
console.log('Server running on port 3000...');