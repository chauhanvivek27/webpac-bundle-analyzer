import { trim } from 'lodash-es';

let x = 'This is all about ';
let y = 'tree shaking in webpack';

let z = trim(x) + y ;

console.log(z);
