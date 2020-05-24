#!/usr/bin/env node

const { spawnLive, args, scriptsDir } = require('./lib');

spawnLive('node', [scriptsDir('test.js'), '--coverage', ...args]);
