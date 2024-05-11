"use strict";

{
    const student = {
        _fname: "Ole",
        _lname: "Olsen",

        get fname() { return this._fname },
        set fname(fname) { this._fname = fname },
        get lname() { return this._lname },
        set lname(lname) { this._lname = lname }
    };

    const handler = {
        "ownKeys": function(target) {
            return Reflect.ownKeys(target).filter(key => key[0] !== "_");
        }
    };

    const proxy = new Proxy(student, handler);

    function init() {
        const jsonText = JSON.stringify(proxy, null, 4);
        console.log(jsonText);
    }

    document.getElementById("bt").addEventListener("click", init);
}