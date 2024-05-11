import Student from './modules/studentprivate.js';

const ole = new Student("Ole", "Olsen");
console.log(`Student number ${Student.length}: ${ole.initials}`);

// Error in code below, trying to access private propepty of class
console.log(ole.#firstname);