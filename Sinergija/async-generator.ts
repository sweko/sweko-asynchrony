function delay(milliseconds: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

async function* asyncRandomNumbers(milliseconds: number) {
    // This is a web service that returns a random number
    const url = 'https://www.random.org/decimal-fractions/?num=1&dec=10&col=1&format=plain&rnd=new';

    while (true) {
        const response = await fetch(url);
        const text = await response.text();
        yield Number(text);
        await delay(milliseconds);
    }
}

async function example() {
    for await (const number of asyncRandomNumbers(500)) {
        console.log(number);
        if (number > 0.95) break;
    }
}

example();