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

        should.throws(() => {
            config.load(null);
        });

        should(config.config).exactly(null);

    });

    it('should throw for an array', function () {

        let config = new Config();

        should.throws(() => {
            config.load(['config', 'array']);
        });

        should(config.config).exactly(null);

    });

    it('should throw for an integer', function () {

        let config = new Config();

        should.throws(() => {
            config.load(10243);
        });

        should(config.config).exactly(null);

    });

    it('should throw for a float', function () {

        let config = new Config();

        should.throws(() => {
            config.load(40.09142);
        });

        should(config.config).exactly(null);

    });

    it('should throw for a string', function () {

        let config = new Config();

        should.throws(() => {
            config.load('config string');
        });

        should(config.config).exactly(null);

    });

    it('should throw for a function', function () {

        let config = new Config();

        should.throws(() => {
            config.load(function () { return 'function config'; });
        });

        should(config.config).exactly(null);

    });

});
