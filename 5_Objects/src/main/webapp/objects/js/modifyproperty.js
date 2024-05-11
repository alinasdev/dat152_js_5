"use strict";

{
    function init() {

        const student = {"fname": "Ole"};
        Object.defineProperty(student, "fname", {
            "writable": true,
            "enumerable": true,
            "configurable": false
        });

        const desc = Object.getOwnPropertyDescriptor(student, "fname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}