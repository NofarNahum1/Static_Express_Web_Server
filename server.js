const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

let clickCount = 0;

app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve profile.html at root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});

app.get('/click-count', (req, res) => {
    res.json({ count: clickCount });
});

app.post('/click-count', (req, res) => {
    clickCount++;
    res.json({ count: clickCount });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// run by: node server.js
// the website will show at: http://localhost:3001