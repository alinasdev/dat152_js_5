"use strict";
{
    class Student {
        constructor(fname, lname) {
            // Private
            // fname, lname, phone
            let phone = "11223344";

            // Public
            Object.defineProperties(this, {
                "firstname": {
                    "set": function(fn) { fname = fn },
                    "get": function() { return fname },
                    "enumerable": true
                },
                "lastname": {
                    "set": function(ln) { lname = ln },
                    "get": function() { return lname },
                    "enumerable": true
                },
                "phone": {
                    "set": function(pn) { phone = pn },
                    "get": function() { return phone },
                    "enumerable": true
                }
            });
        }
    }

    const student = new Student("Ole", "Olsen");

    document.getElementById("bt").addEventListener("click", () => {console.log(JSON.stringify(student))});
}