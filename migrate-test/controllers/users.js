'use strict';

const Express = require('express');
const router = Express.Router();

const db = require('../models/db')();

router.get('/', (req, res) => {
    db.getAll('SELECT * FROM user')
        .then(result => {
            return res.json(result);
        })
        .catch(err => {
            return res
                .status(500)
                .json(err);
        });
});

router.get('/:userId', (req, res) => {
    db.get('SELECT * FROM user where user_id=?', [req.params.userId])
        .then(result => {
            return res.json(result);
        })
        .catch(err => {
            return res
                .status(500)
                .json(err);
        });
});

module.exports = router;