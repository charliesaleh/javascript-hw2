//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavorites(){
    console.log(`Pizza: ${person3.pizza}`)
    console.log(`Tacos: ${person3.tacos}`)
    console.log(`Burgers: ${person3.burgers}`)
    console.log(`Ice Cream: ${person3.ice_cream}`)
    console.log(`Shakes: `);{
    }   console.log(`Oberwise: ${person3.shakes[0].oberwise}`)
        console.log(`Dunkin: ${person3.shakes[0].dunkin}`)
        console.log(`Culvers: ${person3.shakes[0].culvers}`)
        console.log(`McDonalds: ${person3.shakes[0].mcDonalds}`)
        console.log(`Cupids Candies: ${person3.shakes[0].cupids_candies}`)
}

displayFavorites()



//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // Use an arrow to create the printInfo method
    printInfo = () => console.log(`${this.name} is currently ${this.age} years old.`)
    
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge = () => this.age++
}
    
let person1 = new Person('Dylan', 999)
person1.printInfo()
let person2 = new Person('Chrisian', 999)
person2.printInfo()
person2.addAge()
person2.printInfo()
person2.addAge()
person2.printInfo()
person2.addAge()
person2.printInfo()


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/












// Code Wars
// 1.) Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    return String(num)
}

console.log(numberToString(123))
console.log(numberToString(999))
console.log(numberToString(-100))

// Code Wars
// 2.) Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function opposite(num) {
    return (-num)
}

console.log(opposite(1))