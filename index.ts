import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/takeuntil
// Example 1: Take values until timer emits
//emit value every 1s
const srcList$ = interval(1000);
//after 5 seconds, emit value
const timer$ = timer(5000);
//when timer emits after 5s, complete source
const example = srcList$.pipe(takeUntil(timer$));
const subscribe = example.subscribe((val) => console.log(val));
//output: 0,1,2,3
