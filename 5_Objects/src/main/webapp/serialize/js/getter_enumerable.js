"use strict";

{
    const student = {
        "_fname": null,
        "_reg": /\p{Lu}\p{Ll}+/u,

        get fname() { return this._fname },
        set fname(fname) {
            if (! this._reg.test(fname)) throw new Error("Wrong format on first name");
            this._fname = fname
        }
    };

    // Do not serialize "_fname" and "_reg"
    Object.defineProperties(student, {
        "_fname": { "enumerable": false },
        "_reg": { "enumerable": false }
    });

    function init() {
        student.fname = "Ole";
        const jsonText = JSON.stringify(student,null,4);
        console.log(jsonText);
    }

    document.getElementById("bt").addEventListener("click", init);
}