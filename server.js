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

// page to display after product payment
app.get('/payment/success', (req, res) => {
    // In a real app you might check query parameters or session info
    const product = req.query.product || 'unknown';
    const amount = req.query.amount || '0';

    res.status(200).send(`
        <html>
            <head><title>Payment Success</title></head>
            <body>
                <h1>Спасибо за покупку!</h1>
                <p>Вы успешно оплатили продукт: <strong>${product}</strong></p>
                <p>Сумма: <strong>${amount}</strong></p>
            </body>
        </html>
    `);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`API Server töötab pordi peale ${port}`)
});