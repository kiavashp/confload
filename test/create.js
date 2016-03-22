'use strict';

const path = require('path');
const should = require('should');
const Config = require(path.resolve(__dirname, '..')).Config;

describe('new Config()', function () {

    it('should create an instance', function () {

        let config = new Config();

        should(config).instanceOf(Config);
        should(config).Object();
        should(config.config).exactly(null);

    });

});
