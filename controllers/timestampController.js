function timeStampResponse(req, res, input) {
    if (Number.isInteger(Number(input))) input = new Date(Number(input));
    let unix = Date.parse(input);
    let utc = new Date(unix).toUTCString();
    if (isNaN(unix)) {
        res.json({ error: 'Invalid date' });
    } else {
        res.json({ unix, utc });
    }
}

exports.getCurrentTimestamp = (req, res) => {
    timeStampResponse(req, res, Date.now());
};

exports.getInputTimestamp = (req, res) => {
    timeStampResponse(req, res, req.params.input);
};
