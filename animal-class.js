// Make an animal class:
// 	include 3 properties and 3 methods
// 	At a minimum, have one method console.log something and have one method change a property
// 	You do not need to instantiate the animal class
// Create a mammal class that is a child of the animal class	
// 	override at least one of the methods in the parent class
// 	also modify or add 2 properties
// 	create 2 instance of the mammal class and demonstrate the methods and log the properties
// Create a dog class that is a child of the mammal class
// 	add a new method called greet() that takes in another dog's name and outputs a greeting and
// 	at least one new property, if name is not already a property, add it
// 	create an array of 5 dogs, and iterate through the array, demonstrating one of the methods and logging at least one property
// 		*** Try demonstrating greet() by having the current dog greet the next dog (the last one can greet the first dog)


// 	Try having default paramters and some properties that are not set in the constructor
// 	You can also try having one of the methods invoked in the constructor

class Animal {
    constructor(typeParam, ageParam, nameParam) {
        this.type = typeParam
        this.age = ageParam
        this.name = nameParam
    }

    eat() {
        console.log("I eat other animals smaller than myself")
    }

    sleep() {
        console.log("I sleep in the night only")
    }

    hunt() {
        console.log("I hunt for sport")
    }

}

class Mammal extends Animal {
    constructor(typeParam, ageParam, nameParam, camouflageParam) {
        super(typeParam, ageParam, nameParam)

        this.skills = ["speed", "agility", "stamina"]
        this.camouflage = camouflageParam || false
    }

    eat() {
        console.log("I am different from my breed. I only eat plants. I am peaceful animal")
    }


}

const billyBob = new Mammal("Cheetah", "10", "BillyBob")
console.log(billyBob)

billyBob.eat()

const rabidRebecca = new Mammal("Snake", "100", "RabidRebecca", "camouflage")
console.log(rabidRebecca)

rabidRebecca.hunt()

class Dog extends Mammal {
    constructor(typeParam, ageParam, nameParam, camouflageParam, lovesPeopleParam) {
        super(typeParam, ageParam, nameParam)

        this.skills = ["speed", "agility", "stamina"]
        this.camouflage = camouflageParam || false
        this.lovesPeople = lovesPeopleParam || false
    }

    greet(otherDog) {
        console.log(`Hello other doggy ${otherDog}!! Woof Woof!`)
    }
}

const freddie = new Dog("Poodle", "5", "Freddie")
console.log(freddie)
freddie.greet("Pinkie")

const fiveDogArray = [
    new Dog("Shih Tzu", "2", "Phillipi", false),
    new Dog("German Shepherd", "5", "Franco", false),
    new Dog("Bulldog", "1", "Bluffy", false),
    new Dog("French Bulldog", "6", "Hickory", false),
    new Dog("Black German Shepherd", "18", "Flippy", false)
]

function dogList(allTheDogs) {
    allTheDogs.forEach((dog) => {
        console.log(dog.type)
        console.log(dog.age)
        console.log(dog.name)

    })
}
dogList(fiveDogArray)

const dogs = (dog) => {
    console.log(`hello ${dog[0]}, I'm ${dog[1]}`)
    console.log(`hello ${dog[4]}, I'm ${dog[0]}`)
}

dogs(["Phillipi", "Franco", "Bluffy", "Hickory", "Flippy"])







