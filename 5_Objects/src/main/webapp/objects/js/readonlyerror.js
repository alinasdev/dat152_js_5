"use strict";

{
    function init() {
        const student = {};
        Object.defineProperty(student, "fname", { "value": "Ole" });

        student.fname = "Per"; // Will fail
    }

    document.getElementById("bt").addEventListener("click", init);
}