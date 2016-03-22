'use strict';

const fs = require('fs');

const isObject = function (object) {
    return object && typeof object === 'object' && !Array.isArray(object);
};

class Config {

    constructor() {
        this.config = null;
    }

    loadFromFile(filepath) {
        let file;
        let config;

        try {
            file = fs.readFileSync(filepath, 'utf8');
        } catch (e) {
            throw Error('Error reading config file - ' + e.message);
        }

        try {
            config = JSON.parse(file);
        } catch (e) {
            throw Error('Config file contains invalid JSON - ' + e.message);
        }

        this.config = config;

        return this;
    }

    load(config) {
        if (!isObject(config)) {
            throw Error('config must be an object. Recieved a ' + typeof config);
        }

        this.config = config;

        return this;
    }

    get() {
        let keys = Array.from(arguments);
        let value = this.config;

        for (let k of keys) {
            if (isObject(value) && value.hasOwnProperty(k)) {
                value = value[k];
            } else {
                value = null;
                break;
            }
        }

        return value;
    }

}

module.exports = new Config();
module.exports.Config = Config;
