import Person from './person.js';

export default class extends Person {

    // Public field
    _course;

    // Public static field
    static _courseformat = /^\p{Lu}{3}\d{3}$/u;

    constructor(name, course) {
        super(name); // Calling parent constructor and initializing 'this'
        this.course = course;
    }

    // Public setter
    set course(course) {
        if (!this.constructor._courseformat.test(course)) throw new Error("Wrong course format");
        this._course = course;
    }

    // Public getter
    get course() { return this._course }

    // Public method
    toJSON() {
        return {
            name: this.name,
            course: this.course
        };
    }
}