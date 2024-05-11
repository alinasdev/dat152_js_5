"use strict";

{
    function init() {

        const student = {};
        Object.defineProperty(student, "fname", {
            "value": "Ole",
            "writable": true,
            "enumerable": true,
            "configurable": false
        });

        const desc = Object.getOwnPropertyDescriptor(student, "fname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}