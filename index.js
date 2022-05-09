// init project
const express = require('express');
const app = express();

// enable CORS
// so that API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
    res.json({ greeting: 'hello API' });
});

// timestime enpoint
app.get('/api/:input', function (req, res) {
    let input = req.params.input;

    // check if input is unix then convert to date
    if (Number.isInteger(Number(input))) input = new Date(Number(input));

    // resolve unix from date
    let unix = Date.parse(input);

    // convert unix timestamp to utc date
    let utc = new Date(unix).toUTCString();

    if (isNaN(unix)) {
        res.json({ error: 'Invalid date' });
    } else {
        res.json({ unix, utc });
    }
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
