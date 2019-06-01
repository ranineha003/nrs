var jwt = require('jsonwebtoken');

function isLoggedIn(req, res, next) {
    if (req.method == "OPTIONS") {
        next();
    } else {
        var token = req.headers['x-access-token'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        jwt.verify(token, "myproject", function (err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            console.log(jwt.decode(token))
            req.user = jwt.decode(token);
            next()
        });
    }
}

module.exports.isLoggedIn = isLoggedIn;