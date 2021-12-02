const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/:date?', (req, res) => {
    let dateParam = req.params.date;
    if (!isNaN(dateParam)) {
        dateParam = parseInt(dateParam);
    }
    let d = new Date(dateParam);
    if (dateParam === undefined) {
        d = new Date();
    }
    
    let data = { unix: d.getTime(), utc: d.toUTCString()};
    if (isNaN(d.getTime())) {
        data = { error : "Invalid Date" };
    }
    res.json(data);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
