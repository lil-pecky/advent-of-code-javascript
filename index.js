const { getInput } = require("./src/utils/getInput");

const DAY = process.argv[2];

if (!DAY) {
    throw new Error("No day provided, please provide a date using the command `npm start {day}`");
}

const day = require(`./src/days/day${DAY}`);
const input = getInput(DAY);

const part1 = day.part1(input);
const part2 = day.part2(input);

console.log(`Part 1: ${part1}`);
console.log(`Part 2: ${part2}`);
