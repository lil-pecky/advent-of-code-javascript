const { test, expect } = require("@jest/globals");
const { getTestInput } = require("./src/utils/getInput");

const DAY = process.argv[3];

if (!DAY) {
    throw new Error("No day provided, please provide a date using the command `npm test {day}`");
}

const day = require(`./src/days/day${DAY}`);
const input = getTestInput(DAY);

test('part1', () => {
    expect(day.part1(input)).toBe(day.testOne);
});

test('part2', () => {
    expect(day.part2(input)).toBe(day.testTwo);
});
