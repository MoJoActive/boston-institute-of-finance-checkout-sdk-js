const packageJson = require('../../package.json');

function getNextVersion() {
    return new Promise((resolve) => {
        resolve(packageJson.version);
    });
}

module.exports = getNextVersion;
