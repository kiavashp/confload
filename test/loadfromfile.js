'use strict';

const path = require('path');
const should = require('should');
const Config = require(path.resolve(__dirname, '..')).Config;
const assets = require(path.resolve(__dirname, 'assets'));

describe('config.loadFromFile()', function () {

    it('should return instance', function () {

        let config = new Config();
        let instance = config.loadFromFile(assets['valid-config-file.json']);

        should(instance).instanceOf(Config);

    });

    it('should load from a file', function () {

        let config = new Config();

        config.loadFromFile(assets['valid-config-file.json']);

        should(config.config).Object();

    });

    it('should throw for invalid file', function () {

        let config = new Config();

        should.throws(() => {
            config.loadFromFile(assets['invalid-config-file.json']);
        });

        should(config.config).exactly(null);

    });

});
