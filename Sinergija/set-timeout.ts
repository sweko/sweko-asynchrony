function delay(ms) {
    return new Promise(resolve => setTimeout(()=>resolve(), ms));
}

async function prviDrugi(){
    console.log("prvi");
    await delay(1000);
    console.log("drugi");
    await delay(1000);
    console.log("treci");
    await delay(1000);
    console.log("cetvrti");
    await delay(1000);
    console.log("peti");
}

prviDrugi();
