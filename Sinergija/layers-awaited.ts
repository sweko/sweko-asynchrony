function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

class InnerAsyncLayer {
    async getInnerValue() {
        await delay(1000);
        return "inner";
    }
}

class MidAsyncLayer {
    constructor(public inner: InnerAsyncLayer) { }

    async getMidValue() {
        let innerResult = await this.inner.getInnerValue();
        return "middle-" + innerResult;
    }
}

class OuterAsyncLayer {
    constructor(public middle: MidAsyncLayer) { }

    async getOuterValue() {
        let middleResult = await this.middle.getMidValue();
        return "outer-" + middleResult;
    }
}

let innerAsync = new InnerAsyncLayer();
let midAsync = new MidAsyncLayer(innerAsync);
let outerAsync = new OuterAsyncLayer(midAsync);

outerAsync.getOuterValue().then(console.log);