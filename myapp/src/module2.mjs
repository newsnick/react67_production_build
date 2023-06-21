// run module - node ./module2.mjs

import {a,b} from './module1.mjs'; //must import to use
import d from './module1.mjs'; //defult import without cury braces
// or 
// import d,{a,b} from './module1.mjs';

console.log(a);
console.log(b);
console.log(d);
