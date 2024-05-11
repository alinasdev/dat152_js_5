import Person from './modules/personprivate.js';
var ole = new Person("Ole Olsen");
console.log(JSON.stringify(ole));
var per = new Person("Per Hansen");
console.log(JSON.stringify(per));