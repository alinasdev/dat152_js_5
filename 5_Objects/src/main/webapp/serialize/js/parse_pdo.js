"use strict";

{
    const text = '{ "fname": "Ole", "lname": "Olsen"}';

    function init() {
        const object = JSON.parse(text);
        console.log(object);
    }

    document.getElementById("parse").addEventListener("click", init);
}