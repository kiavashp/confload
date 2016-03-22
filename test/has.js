'use strict';

const path = require('path');
const should = require('should');
const Config = require(path.resolve(__dirname, '..')).Config;

describe('config.has()', function () {

    it('should return true before loading', function () {

        let config = new Config();

        should(config.has()).exactly(true);

    });

    it('should return false for loaded object', function () {

        let config = new Config();

        config.load({});

        should(config.has()).exactly(true);

    });

    it('should return true for loaded object keys', function () {

        let config = new Config();
        let configObject = {
            test: {
                config: {
                    object: true
                }
            },
            loaded: {
                from: 'Config::load()'
            }
        };

        config.load(configObject);

        for (let k of Object.keys(configObject)) {
            should(config.has(k)).exactly(true);
        }

    });

    it('should not throw on non-existent key', function () {

        let config = new Config();

        config.load({});

        config.has('non-existent', 'key');

    });

});
