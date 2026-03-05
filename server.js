const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const NIMI = process.env.MY_NAME || 'Tundmatu nimi (Viga!)';

app.get('/api/info', (req, res) => {
    res.status(200).json({
        missioon: "Isesiesev deploimine edukas",
        meeskond: NIMI,
        aeg: new Date().toISOString()
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`API Server töötab pordi peale ${port}`)
});