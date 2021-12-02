const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/:date?', (req, res) => {
    let date_param = req.params.date;
    if (!isNaN(date_param)) {
        date_param = parseInt(date_param);
    }
    let d = new Date(date_param);
    if (isNaN(d.getTime())) {
        res.json({ error : "Invalid Date" });
    }
    res.json({ unix: d.getTime(), utc: d.toUTCString()});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
