"use strict";

{
    const student = {};
    Object.defineProperties(student, {
        "fname": { "value": "Ole",   "enumerable": true, "configurable": true },
        "lname": { "value": "Olsen", "enumerable": true, "configurable": false },
    });

    document.getElementById("iterate").addEventListener("click", () => {
        console.clear();
        Object.entries(student).forEach(
            ([key, value]) => {
                console.log(`${key}: ${value}`);
                const desc = Object.getOwnPropertyDescriptor(student, key);
                console.log(desc);
            }
        )
    });

    document.getElementById("deleteFname").addEventListener("click", () => { delete student.fname });
    document.getElementById("deleteLname").addEventListener("click", () => { delete student.lname });
    document.getElementById("changeFname").addEventListener("click", () => {
        Object.defineProperty(student, "fname", { "writable": true })
    });

    document.getElementById("changeLname").addEventListener("click", () => {
        Object.defineProperty(student, "lname", { "writable": true })
    });
}