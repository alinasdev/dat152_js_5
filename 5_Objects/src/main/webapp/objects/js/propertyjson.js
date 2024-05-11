"use strict";

{
    function init() {
        const student = {
            "fname": "Ole", 
            "ename": "Olsen"
        };


        const desc = Object.getOwnPropertyDescriptor(student, "fname");
        console.log(desc);
    }

    document.getElementById("bt").addEventListener("click", init);
}