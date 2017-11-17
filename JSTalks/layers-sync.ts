class InnerLayer {
    getInnerValue() {
        return "inner";
    }
}

class MidLayer {
    constructor(public inner: InnerLayer) { }

    getMidValue() {
        return "middle-" + this.inner.getInnerValue();
    }
}

class OuterLayer {
    constructor(public middle: MidLayer) { }

    getOuterValue() {
        return "outer-" + this.middle.getMidValue();
    }
}

let inner = new InnerLayer();
let mid = new MidLayer(inner);
let outer = new OuterLayer(mid);

console.log(outer.getOuterValue());