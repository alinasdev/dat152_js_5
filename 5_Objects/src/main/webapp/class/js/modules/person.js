export default class {

    // Public field
    _name;

    // Public static field
    static _nameformat = /^\p{Lu}\p{Ll}+(\s+\p{Lu}\p{Ll}+)*$/u;

    constructor(name) { this.name = name }

    // Public setter
    set name(name) {
        if (!this.constructor._nameformat.test(name)) throw new Error("Wrong format on name");
        this._name = name;
    }
    
    // Public getter
    get name() { return this._name }

    // Public getter
    get initials() { return this.constructor._getFirstChars(this._nameArray()) }

    // Public method
    toJSON() {
        return {
            name: this.name,
            initials: this.initials
        };
    }

    // Public method
    _nameArray() { return this.name.split(/\s+/) }

    // Public static method
    static _getFirstChars(list) {
        return list.reduce((ac, current) => `${ac}${current[0]}`,"");
    }
}