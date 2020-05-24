#!/usr/bin/env node

const { spawnLive, args } = require('./lib');

spawnLive('npx', ['microbundle', '--raw', ...args]);
