const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const NIMI = process.env.MY_NAME || 'Tundmatu nimi (Viga!)';

// serve static assets from public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/info', (req, res) => {
    res.status(200).json({
        missioon: "Isesiesev deploimine edukas",
        meeskond: NIMI,
        aeg: new Date().toISOString()
    });
});

// page to display after product payment
app.get('/payment/success', (req, res) => {
    // this will serve the static HTML file; query parameters handled client-side
    res.sendFile(path.join(__dirname, 'public', 'payment-success.html'));
});

// root route - serve simple homepage or redirect
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`API Server töötab pordi peale ${port}`)
});