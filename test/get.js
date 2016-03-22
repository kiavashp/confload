'use strict';

const path = require('path');
const should = require('should');
const Config = require(path.resolve(__dirname, '..')).Config;

describe('config.get()', function () {

    it('should return null before loaded', function () {

        let config = new Config();

        should(config.get()).exactly(null);

    });

    it('should get a loaded object', function () {

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

        should(config.get()).exactly(configObject);

    });

    it('should get a loaded object keys', function () {

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
            should(config.get(k)).exactly(configObject[k]);
        }

    });

    it('should throw on non-existent key', function () {

        let config = new Config();

        config.load({});

        try {
            config.get('non-existent', 'key');
        } catch (e) {
            return;
        }

        throw Error('should have thrown');

    });

});
