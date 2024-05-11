export default class {

    // Private fields
    #firstname;
    #lastname;
    #id;
    
    // A private static field
    static #numerOfStudents = 0;
    
    constructor(fname,lname) {
        this.#firstname = fname;
        this.#lastname = lname;
        this.#id = this.constructor.#numerOfStudents;
        this.constructor.#numerOfStudents = this.constructor.#numerOfStudents + 1;
    }
    
    // A public getter
    /**
     * @public
     * @type {String}
     */
    get initials() {
        return `${this.#firstname[0]}${this.#lastname[0]}`;
    }
    
    // A public static getter
    /**
     * @public
     * @type {String}
     */
    static get length() {
        return this.#numerOfStudents;
    }
}