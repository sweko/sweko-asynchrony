function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

class InnerPromiseLayer {
    getInnerValue() {
        return delay(1000).then(() => "inner");
    }
}

class MidPromiseLayer {
    constructor(public inner: InnerPromiseLayer) { }

    getMidValue() {
        return this.inner.getInnerValue().then(result => "middle-" + result);
    }
}

class OuterPromiseLayer {
    constructor(public middle: MidPromiseLayer) { }

    getOuterValue() {
        return this.middle.getMidValue().then(result => "outer-" + result);
    }
}

let innerPromise = new InnerPromiseLayer();
let midPromise = new MidPromiseLayer(innerPromise);
let outerPromise = new OuterPromiseLayer(midPromise);

outerPromise.getOuterValue().then(console.log);