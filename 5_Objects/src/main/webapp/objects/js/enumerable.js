"use strict";

{
    function init() {

        const student = {};
        Object.defineProperties(student, {
            "fname": { "value": "Ole",              "enumerable": true },
            "lname": { "value": "Olsen",            "enumerable": false },
            "address": { "value": "Olsenbakken 22", "enumerable": true }
        });

        Object.entries(student).forEach(
            ([key,value]) => {console.log(`${key}: ${value}`)}
            
        );
    }

    document.getElementById("bt").addEventListener("click", init);
}