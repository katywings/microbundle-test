const promisify = require('util').promisify;
const { spawn } = require('child_process');
const path = require('path');

module.exports.pkgDir = (...suffix) => path.resolve(__dirname, '..', ...suffix);
module.exports.scriptsDir = (...suffix) => module.exports.pkgDir('scripts', ...suffix)
module.exports.args = process.argv.slice(2);
module.exports.spawn = promisify(spawn);
module.exports.spawnLive = (command, args) => {
  return module.exports.spawn(command, args, { stdio: 'inherit' })
}
