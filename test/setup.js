process.env.NODE_ENV = 'test';

var config = require('config'),
    chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);
global.expect = chai.expect;

exports = module.exports = {};
