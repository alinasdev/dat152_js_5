"use strict";

class MyClass {
    _created = new Date();
    
    constructor() {
        document.getElementById("getproperties").addEventListener("click", this._getproperties.bind(this));
        document.getElementById("readonly").addEventListener("click", this._readonly.bind(this));
        document.getElementById("writable").addEventListener("click", this._writable.bind(this));
        document.getElementById("update").addEventListener("click", this._update.bind(this));
    }

    get created() { return this._created }

    sayGoodby() {console.log("Good bye")}

    _getproperties() {
        Reflect.ownKeys(this).forEach(key => {
            const desc = Object.getOwnPropertyDescriptor(this, key);
            console.log(`${key} - writable: ${desc.writable} - configurable: ${desc.configurable}`);
            });
    }

    _readonly() {
        Object.defineProperty(this, "_created", { writable: false });
    }

    _writable() {
        Object.defineProperty(this, "_created", { writable: true });
    }

    _update() {
        this._created = new Date();
    }
}

const myInstance = new MyClass();
