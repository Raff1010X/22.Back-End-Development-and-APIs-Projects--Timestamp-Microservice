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

const timestampRouter = require('./routes/timestampRoutes');

app.use('/api', timestampRouter);

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
