/** @format */

import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstname: string, lastName: string) {
    this.firstName = firstname;
    this.lastName = lastName;
  }
}

let myName = new Person("Jonathan", "Disla");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
