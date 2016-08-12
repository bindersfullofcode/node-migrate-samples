'use strict';

const Promise = require('bluebird');
const path = require('path');

const defaultSqlite = require('sqlite3');
const defaultCamelize = require('camelize');
const defaultConfig = require('../config/config').database;

class Db {
    constructor(config, sqlite, camelize) {
        this.config = config;
        this.sqlite = sqlite;
        this.camelize = camelize;
        this.db = Promise.promisifyAll(new sqlite.Database(config.name));
    }

    get(query, params = []) {
        return this.db.getAsync(query, params)
            .then(this.camelize);
    }

    getAll(query, params = []) {
        return this.db.allAsync(query, params)
            .then(this.camelize);
    }

    execute(query, params = []) {
        return this.db.execAsync(query, params);
    }

    close() {
        this.db.close();
    }
}

function create(config = defaultConfig, sqlite = defaultSqlite, camelize = defaultCamelize) {
    return new Db(config, sqlite, camelize);
}

module.exports = create;