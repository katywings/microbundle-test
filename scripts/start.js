#!/usr/bin/env node

const { spawnLive } = require('./lib');

spawnLive('npx', ['ts-node', 'lib/main.ts']);