function* infiniteSequence() {
    var i = 0;
    while (true) {
        yield i++;
    }
}

var iterator = infiniteSequence();
for (var index = 0; index < 100; index++) {
    const { value, done } = iterator.next();
    if (done) {
        break;
    }
    console.log(value);
}
