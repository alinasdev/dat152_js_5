"use strict";

{
    const student = {};

    Object.defineProperties(student, {
        // Do not serialize "_fname" and "_reg"
        "_fname": { "writable": true, "enumerable": false },
        "_reg": { "value": /\p{Lu}\p{Ll}+/u, "enumerable": false },

        "fname": {
            "enumerable": true, // Can be serialized
            "set": function(fname) {
                if (!this._reg.test(fname)) throw new Error("Wrong format on first name");
                this._fname = fname
            },
            "get": function() { return this._fname }

        }
    });


    function init() {
        student.fname = "Ole";
        const jsonText = JSON.stringify(student,null,4);
        console.log(jsonText);
    }

    document.getElementById("bt").addEventListener("click", init);
}