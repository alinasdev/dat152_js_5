"use strict";

{
    function init() {

        const student = {};
        Object.defineProperties(student, {
            "fname": { "value": "Ole", "writable": true,"enumerable": true },
            "lname": { "value": "Olsen","enumerable": true }
        });

        console.log(student);
        //const desc = Object.getOwnPropertyDescriptor(student, "lname");
        //console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}