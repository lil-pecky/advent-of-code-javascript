const { readFileSync } = require("fs");

function getTestInput (day) {
    return getInputFromPath(`./src/input/test/day${day}.txt`);
}

function getInput (day) {
    return getInputFromPath(`./src/input/day${day}.txt`);
}

function getInputFromPath (path) {
    const file = readFileSync(path);

    return file.toString().split('\r\n');
}

module.exports = { getInput, getTestInput };
