export default class {

    // Private field
    #name;

    // Private static field
    static #nameformat = /^\p{Lu}\p{Ll}+(\s+\p{Lu}\p{Ll}+)*$/u;

    constructor(name) { this.name = name }

    // Public setter
    set name(name) {
        if (!this.constructor.#nameformat.test(name)) throw new Error("Wrong format on name");
        this.#name = name;
    }
    
    // Public getter
    get name() { return this.#name }

    // Public getter
    get initials() { return this.constructor.#getFirstChars(this.#nameArray()) }

    // Public method
    toJSON() {
        return {
            name: this.name,
            initials: this.initials
        };
    }

    // Private method
    #nameArray() { return this.name.split(/\s+/) }

    // Private static method
    static #getFirstChars(list) {
        return list.reduce((ac, current) => `${ac}${current[0]}`,"");
    }
}