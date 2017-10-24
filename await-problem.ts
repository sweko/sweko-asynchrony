
function delayRandom() {
    const randTimeout = Math.floor(Math.random() * 2000);
    return new Promise<void>((resolve, reject) => {
        setTimeout(function() {
            resolve();
        }, randTimeout);
    });
}

interface Array<T> {
    syncForEach(action: (value: T, index: number, array: T[]) => Promise<void>): void;
}

if (!Array.prototype.syncForEach) {
    Array.prototype.syncForEach = async function<T> (action: (value: T, index: number, array: T[]) => Promise<void>): Promise<void> {
       if (this == null) {
            throw new TypeError('Array.prototype.syncForEach called on null or undefined');
        }

        const source = <T[]> this;
        for (let index = 0; index < source.length; index++) {
            const item = source[index];
            await action(item, index, source);
        }
    };
}

let values = [1, 2, 3, 4, 5, 6];

values.syncForEach(async (number) => {
    console.log(number);
    await delayRandom();
    console.log(number);
});

console.log("--------");

