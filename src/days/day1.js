function part1 (input) {
    const numbers = parseInputToInt(input);
    let count = 0;
    let lastNumber = numbers[0];

    numbers.forEach((number) => {
        if (number > lastNumber) {
            count++;
        }
        lastNumber = number;
    });
    return count;
}

function part2 (input) {
    const numbers = parseInputToInt(input);
    let count = 0;
    let lastSum = numbers[0] + numbers[1] + numbers[2];
    for (let i = 0; i < numbers.length - 3; i++) {
        const currentSum = numbers[i] + numbers[i + 1] + numbers[i + 2];

        if (currentSum > lastSum) {
            count++;
        }
        lastSum = currentSum;
    };
    return count;
}

const testOne = 7;
const testTwo = 5;

function parseInputToInt(input) {
    return input.map((number) => parseInt(number));
}

module.exports = { part1, part2, testOne, testTwo };
