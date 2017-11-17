import { Observable } from "rxjs";

var source: Observable<number> = Observable.create(observer => {
    let nextResult = function(){
        const random = Math.floor(Math.random() * 500);
        observer.next(random);
        setTimeout(()=> nextResult(), random);
    };

    nextResult();
});

source.subscribe(n => console.log(n));





