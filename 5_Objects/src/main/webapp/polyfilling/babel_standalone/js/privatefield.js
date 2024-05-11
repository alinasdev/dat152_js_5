/* Observe, module path with Babel standalone is relative to the HTML document! */
import Person from './js/modules/personprivate.js';
var ole = new Person("Ole Olsen");
console.log(JSON.stringify(ole));
var per = new Person("Per Hansen");
console.log(JSON.stringify(per));