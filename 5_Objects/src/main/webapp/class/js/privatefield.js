import Person from './modules/personprivate.js';

const ole = new Person("Ole Olsen");
console.log(JSON.stringify(ole));

const per = new Person("Per Hansen");
console.log(JSON.stringify(per));
