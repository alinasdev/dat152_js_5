"use strict";

{
    function init() {
        const student = (
            function() {
                return {
                    "fname": "Ole",
                    "lname": "Olsen"
                }
            }
        )();

        console.log(JSON.stringify(student, null, 4));
    }

    document.getElementById("bt").addEventListener("click", init);
}