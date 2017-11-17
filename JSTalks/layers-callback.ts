class InnerCbLayer {
    getInnerValue(callback) {
        setTimeout(function () {
            callback("inner");
        }, 1000);
    }
}

class MidCbLayer {
    constructor(public inner: InnerCbLayer) { }

    getMidValue(callback) {
        let newCallBack = function (innerValue) {
            callback("middle-" + innerValue);
        }

        this.inner.getInnerValue(newCallBack);
    }
}

class OuterCbLayer {
    constructor(public middle: MidCbLayer) { }

    getOuterValue(callback) {
        let newCallBack = function (midValue) {
            callback("outer-" + midValue)
        }

        this.middle.getMidValue(newCallBack);
    }
}

let innerCb = new InnerCbLayer();
let midCb = new MidCbLayer(innerCb);
let outerCb = new OuterCbLayer(midCb);

outerCb.getOuterValue(console.log);