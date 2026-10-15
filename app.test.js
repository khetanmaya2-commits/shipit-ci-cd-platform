//contains tests that verify expected behavior or configuration.
//used built-in test runner of node.js

const test = require('node:test');
const assert = require('node:assert/strict');

test('ShipIt application configuration is valid', () => {
    const pkg = require('./package.json');

    assert.equal(pkg.name, 'shipit-cicd-platform');
    assert.equal(typeof pkg.scripts.test, 'string');
});

test('demonstrate that Jenkins detects failures', () => {
    assert.equal(1 + 0, 3);
});
