let getSomeValue = () => {
    console.log("getting some value");
    return "some-value";
}

let getOtherValue = (value) => {
    console.log("getting other value");
    return value.replace("some","other");
}

let getThirdValue = (value) => {
    console.log("getting third value");
    return value.replace("other", "third");
}

let value = getSomeValue();
console.log("got some value", value);
let otherValue = getOtherValue(value);
console.log("got other value", otherValue);
let thirdValue = getThirdValue(otherValue);
console.log("got third value", thirdValue);

