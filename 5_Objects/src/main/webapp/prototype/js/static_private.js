"use strict";

class MyClass {
    static #first = new Date();

    constructor() {
        this._getproperties = this._getproperties.bind(this);
        this._readonly = this._readonly.bind(this);
        this._writable = this._writable.bind(this);
        this._update = this._update.bind(this);

        document.getElementById("getproperties").addEventListener("click", this._getproperties);
        document.getElementById("readonly").addEventListener("click", this._readonly);
        document.getElementById("writable").addEventListener("click", this._writable);
        document.getElementById("update").addEventListener("click", this._update);
    }


    _getproperties() {
        const desc = Object.getOwnPropertyDescriptor(this.constructor, "first");
        console.log(desc);
        //console.log(this.constructor.#first);
    }

    _readonly() {
        Object.defineProperty(this.constructor, "#first", { writable: false });
    }

    _writable() {
        Object.defineProperty(this.constructor, "#first", { writable: true });
    }

    _update() {
        this.constructor.#first = new Date();
    }
}

const myInstance = new MyClass();
