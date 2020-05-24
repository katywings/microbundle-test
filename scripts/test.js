#!/usr/bin/env node

const { spawnLive, args } = require('./lib');

spawnLive('npx', ['jest', 'spec', '--notify', ...args]);