exports.inputCheck = (req, res, next) => {
    let input = req.params.input;

    if (input === undefined) input = new Date();

    if (Number.isInteger(Number(input))) input = new Date(Number(input));

    req.unix = Date.parse(input);
    req.utc = new Date(req.unix).toUTCString();

    if (isNaN(req.unix)) {
        res.json({ error: 'Invalid date' });
    } else {
        next();
    }
};

exports.getTimestamp = (req, res) => {
    res.json({ unix: req.unix, utc: req.utc });
};
