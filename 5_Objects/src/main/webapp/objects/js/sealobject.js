"use strict";

{
    const student = {
        "fname": null,
        "lname": null
    };
    Object.seal(student);

    document.getElementById("set").addEventListener("click", setValues);
    document.getElementById("add").addEventListener("click", addProperty);
    document.getElementById("show").addEventListener("click", () => {console.log(student)});

    function setValues() {
        student.fname = "Ole";
        student.lname = "Olsen";
    }

    function addProperty() {
        student.phone = "11223344";
    }
}
