"use strict";
{
    class Student {
        constructor(fname, lname) {
            // Private
            // fname, lname, phone
            let phone = "11223344";

            // Public
            this.getFirstname = () => { return fname };
            this.setFirstname = (fn) => { fname = fn };
            this.getLastname = () => { return lname };
            this.setLastname = (ln) => { lname = ln };
            this.getPhone = () => { return phone };
            this.setPhone = (ph) => { phone = ph };
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
            student.setFirstname(firstname);
        }
        if (lastname !== "") {
            lnameElm.value = "";
            student.setLastname(lastname);
        }
        if (phone !== "") {
            phoneElm.value = "";
            student.setPhone(phone);
        }
    }

    function show() {
        document.getElementById("display").textContent = `${student.getFirstname()} ${student.getLastname()} has phone ${student.getPhone()}`;
    }

    document.getElementById("show").addEventListener("click", show);
    document.getElementById("store").addEventListener("click", store);
}