"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
    }
    return Person;
}());
var myName = new Person("Jonathan", "Disla");
console.log("My name is " + myName.firstName + " " + myName.lastName);
