// start with creating an idividual car
// remember that cosntructor is a method so you need () and {}
// this.maker (property)
// you need to set the parameters to something inside the class in order for them to used
// you can use default values but if you miss the parameter you change the order and thig is assigned weird
// you don't need to set everything in the constructor
// method is a verb
class Car {
    constructor(makerParam, serialNumberParam, yearParam) {
        this.maker = makerParam
        this.serialNumber = serialNumberParam || 'TBD' // if parameter is empty -- do TBD
        this.year = yearParam || 2000

    }
    // this defines the method only -- it does not run until you call it ***later
    drive() /* method */ {
        console.log("vroom vroom")
    }
}

// you can use a variable or not as input arguments but wahtch theorder
// order matters and variable names don't to the constructor
let newMaker = 'Honda' // outside of scope // constructor is self-contained
// order matters in the arguments you pass in
const testCar = new Car(newMaker, '3246565', 2010) // new Car is an instance
// console.log(testCar)

// you can change this 
// but if you hard code a value you need ot have a manner of changing it if thta is not always what you want it to be

testCar.color = "blue" // add properties outside of the constructor

// testCar.year = 2022 // you can add items using dot notation
// console.log(testCar)
//prints below:
//Car { maker: 'Honda', serialNumber: '3246565', year: 2022 }//

// testCar.drive() // must invoke method that was defined in the calss

const car2 = new Car('Toyota', '56656555', 2019)
// console.log("car two")
// console.log(car2)

// console.log("test car")
// console.log(testCar)

// ========== FACTORIES ==================
// WHY A FACTORY?
// this provides a means for creating multiple versions or instances of a class
// more automated way!!!

class Factory {
    // the only parameter passed in the constructor is company
    // cars array will be created with an empty array
    // this way i know it exits adn I can use it later
    constructor(companyParam) {
        this.company = companyParam
        this.cars = [] // empty array to use later to push??

    }
    // this is how i make a new car  and then I add it to the cars[] array note that using the Car class from above creating new instance
    // the serial number is going to be the current length of the cars
    generateCar() {
        // this is instantiating a new car
        const newCar = new Car(this.company, this.cars.length)// this.cars.length value is being used for the serial number (it replaces it essentially)
        this.cars.push(newCar)

        // you could make this more complex you could add year you could create colors, doors, models if you wanted to mek this more complex you probably want to update your Car class to 
    }

    findCar(index) {
        return this.cars[index] // this why we have .length as the serial number to keep track of index
    }
}

const tesla = new Factory('Tesla') /// variable name and companyParam should match but they don't have to (this is just more readable when we want to figure out which factory) -- use meaningful names

// console.log(tesla)
// the factory exists but there are no cars

tesla.generateCar()
console.log(tesla)

tesla.generateCar()
console.log(tesla)

tesla.generateCar()
console.log(tesla)

tesla.generateCar()
console.log(tesla)

console.log(tesla.findCar(1)) // number in the index not the array number?

const porsche = new Factory('Porshe')
porsche.generateCar()
porsche.generateCar()
porsche.generateCar()
porsche.generateCar()
// console.log(porsche)
// console.log(tesla)

//// ==================STATIC PROPERTIES=========================
// These only work for the class as a whole
// these don't work on specific instances**

class ThereIsOnlyOne {
    // homework governor -- not going to create instances only one governer
    // onlyOne is method
    constructor(nameProp) {
        this.name = nameProp
    }

    // static keyword says you won't be able to use this property or method as you normally would (in an instance)
    static sharedName = "We all share this one" // don't need this keyword for static


    static onlyOne() {
        console.log("I don't have power in an instance, only the entire class")
    }

    methodWeUnderstand() {
        console.log("I ONLY work in an instance")
    }
}

ThereIsOnlyOne.onlyOne()
// ThereIsOnlyOne.methodWeUnderstand()

console.log(ThereIsOnlyOne.sharedName)

console.log('-----------Instantiating first instance----')

const invokedOne = new ThereIsOnlyOne("first instance")
console.log(invokedOne)

console.log('---------Now there is an instance-------')
// demonstrate the onlyOne() doesn't work on the instance
// invoked.onlyOne()'

invokedOne.methodWeUnderstand()

// EXAMPLE:

class Animal {
    constructor() {
        this.numlegs = 4
        this.diet = 'herbivore'
    }
    // this is a property
    staticIsAlive = true
    static sleeping() {
        console.log("is sleeping")
    }
}

// this is logging a property
console.log(Animal.isAlive)

/// this is invoking a method
Animal.sleeping()

const sheep = new Animal()
//sheep.sleeping()  // this cannot be run because it is static and can only be run in the class and not in instance


// class Mammal extends Animal {

// }

// console.log(Animal.isAlive)

// /// this is invoking a method
// Animal.sleeping()

// const sheep = new Animal()
// //sheep.sleeping()

// Mammal.sleeping()