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
                    "get": function() { return fname }
                },
                "lastname": {
                    "set": function(ln) { lname = ln },
                    "get": function() { return lname }
                },
                "phone": {
                    "set": function(pn) { phone = pn },
                    "get": function() { return phone }
                }
            });
        }
    }

    const student = new Student("Ole", "Olsen");

    function store() {
        const fnameElm = document.getElementById("fname");
        const firstname = fnameElm.value.trim();
        const lnameElm = document.getElementById("lname");
        const lastname = lnameElm.value.trim();
        const phoneElm = document.getElementById("phone");
        const phone = phoneElm.value.trim();


        if (firstname !== "") {
            fnameElm.value = "";
            student.firstname = firstname;
        }
        if (lastname !== "") {
            lnameElm.value = "";
            student.lastname = lastname;
        }
        if (phone !== "") {
            phoneElm.value = "";
            student.phone = phone;
        }
    }

    function show() {
        document.getElementById("display").textContent = `${student.firstname} ${student.lastname} has phone ${student.phone}`;
    }

    document.getElementById("show").addEventListener("click", show);
    document.getElementById("store").addEventListener("click", store);
}