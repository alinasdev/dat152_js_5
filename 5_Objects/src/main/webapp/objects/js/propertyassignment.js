"use strict";

{
    function init() {
        const student = {};
        student.fname = "Ole";

        const desc = Object.getOwnPropertyDescriptor(student, "fname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}