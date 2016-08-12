'use strict';

const db = require('../models/db')();

exports.up = function (next) {
  db.execute(`
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      first_name TEXT NOT NULL,
      last_name  TEXT NOT NULL,
      description TEXT
    );`)
    .then(next);
};

exports.down = function (next) {
  db.execute(`
      DROP TABLE IF EXISTS user;
    `)
    .then(next);
};
