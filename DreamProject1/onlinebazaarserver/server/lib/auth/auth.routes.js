var express = require('express')
var router = express.Router();
var passport = require('./passport');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


router.route('/login')
    .post(function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(409).json({ login: false, errMsg: info.errMsg });
            }
            req.login(user, function (err) {
                if (err) {
                    console.log('Logged in error');
                    console.error(err);
                    return next(err);
                } else {
                       req.session.user=user;
                       var token = jwt.sign({ id: user._id }, "myproject", {
                        expiresIn: 86400 // expires in 24 hours
                      });
                     return  res.status(200).send({ auth: true, token: token ,login: true,user:user});
                    // return res.json({ login: true });
                }

            });
        })(req, res, next);
    });

router.route('/signup')
    .post(function (req, res, next) {
        passport.authenticate('local-signup', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(409).json({ signup: false, errMsg: info.errMsg });
            }
            req.login(user, function (err) {
                if (err) {
                    console.error(err);
                    return next(err);
                } else {
                       req.session.user=user;
                    return res.send({signup: true});
                }

            });
        })(req, res, next);
    });

router.get('/logout', function (req, res) {
    req.logout();
    req.session.destroy();
    return res.send({logout: true});
})

module.exports = router;
