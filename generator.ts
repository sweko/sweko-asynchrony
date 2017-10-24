// function* infiniteSequence() {
//     var i = 0;
//     while (true) {
//         yield i++;
//     }
// }

// var iterator = infiniteSequence();
// for (var index = 0; index < 100; index++) {
//     console.log(iterator.next()); // { value: xxxx, done: false } forever and ever
// }

async function* asyncRandomNumbers() {
    // This is a web service that returns a random number
    const url = 'https://www.random.org/decimal-fractions/?num=1&dec=10&col=1&format=plain&rnd=new';

    while (true) {
        const response = await fetch(url);
        const text = await response.text();
        yield Number(text);
    }
}

async function example() {
    for await (const number of asyncRandomNumbers()) {
        console.log(number);
        if (number > 0.95) break;
    }
}

example();
