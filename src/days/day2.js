function part1(input) {
    let vertical = 0;
    let horizontal = 0;

    input.forEach((point) => {
        const [direction, amount] = point.split(' ');

        switch (direction) {
            case 'forward':
                horizontal += parseInt(amount);
                break;
            case 'down':
                vertical += parseInt(amount);
                break;
            case 'up':
                vertical -= parseInt(amount);
                break;
        }
    });
    return vertical * horizontal;
}

function part2(input) {
    let horizontal = 0;
    let aim = 0;
    let depth = 0;

    input.forEach((point) => {
        const split = point.split(' ');
        const direction = split[0];
        const amount = parseInt(split[1]);

        switch (direction) {
            case 'forward':
                horizontal += amount;
                depth += aim * amount;
            break;
            case 'down':
                aim += amount;
            break;
            case 'up':
                aim -= amount;
            break;
        }
    });

    return horizontal * depth;
}

const testOne = 150;
const testTwo = 900;

module.exports = { part1, part2, testOne, testTwo };
