'use strict';

const path = require('path');
const should = require('should');
const Config = require(path.resolve(__dirname, '..')).Config;

describe('config.load()', function () {

    it('should return instance', function () {

        let config = new Config();
        let instance = config.load({});

        should(instance).instanceOf(Config);

    });

    it('should load from an object', function () {

        let config = new Config();
        let configObject = {
            test: {
                config: {
                    object: true
                }
            },
            loaded: {
                from: 'Config.load()'
            }
        };

        config.load(configObject);

        should(config.config).exactly(configObject);

    });

    it('should throw for null', function () {

        let config = new Config();

        try {
            config.load(null);
        } catch (e) {
            should(config.config).exactly(null);
            return;
        }

        throw Error('should have thrown');

    });

    it('should throw for an array', function () {

        let config = new Config();

        try {
            config.load(['config', 'array']);
        } catch (e) {
            should(config.config).exactly(null);
            return;
        }

        throw Error('should have thrown');

    });

    it('should throw for an integer', function () {

        let config = new Config();

        try {
            config.load(10243);
        } catch (e) {
            should(config.config).exactly(null);
            return;
        }

        throw Error('should have thrown');

    });

    it('should throw for a float', function () {

        let config = new Config();

        try {
            config.load(40.09142);
        } catch (e) {
            should(config.config).exactly(null);
            return;
        }

        throw Error('should have thrown');

    });

    it('should throw for a string', function () {

        let config = new Config();

        try {
            config.load('config string');
        } catch (e) {
            should(config.config).exactly(null);
            return;
        }

        throw Error('should have thrown');

    });

    it('should throw for a function', function () {

        let config = new Config();

        try {
            config.load(function () { return 'function config'; });
        } catch (e) {
            should(config.config).exactly(null);
            return;
        }

        throw Error('should have thrown');

    });

});
