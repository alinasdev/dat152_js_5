"use strict";

{

    class MyClass {
        static first = new Date();
    }

    function getproperties() {
        const desc = Object.getOwnPropertyDescriptor(MyClass, "first");
        console.log(desc);

    }

    function readonly() {
        Object.defineProperty(MyClass, "first", { writable: false });
    }

    function writable() {
        Object.defineProperty(MyClass, "first", { writable: true });
    }

    function update() {
        MyClass.first = new Date();
    }

    document.getElementById("getproperties").addEventListener("click", getproperties);
    document.getElementById("readonly").addEventListener("click", readonly);
    document.getElementById("writable").addEventListener("click", writable);
    document.getElementById("update").addEventListener("click", update);

}
