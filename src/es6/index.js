// antes de ECMAScript
function newFunction(name, age, country) {
    var name = name || 'Daniel'
    var age = age || 20
    var country = country || 'Colombia'
    console.log(name, age, country)
}

// con ES6
function newFunction2 (name='Daniel', age= 20, country='Colombia'){
    console.log(name,age,country)
}

newFunction2()
newFunction2('ricardo', 43, 'Mexico')

//templete literal

let hello = "Hello"
let world = "World"

let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//multilinea en strings

let lorem = "la primera frace que queremos concatenar \n"
+ "la segunda frace que queremos concatenar"

let lorem2 = `la primera frace de la segunda variable
el segundo renglon de la frace 2`

console.log(lorem)
console.log(lorem2)

//destructuracion de elementos

let person = {
    name: 'daniel',
    age: '23',
    country: 'CO'
}

console.log(person.name, person.age)

let {name, age, country} = person
console.log(name, age)


//operader de propagacion

let team1 = ['oscar', 'julian', 'racardo']
let team2 = ['valeria', 'yesica', 'camila']

let education = ['david', ...team1, ...team2]

console.log(education)

//encapsulamiento

{
    var globalVar = 'Global Var'
}
{
    let globalLet = 'global Let'
    console.log(globalLet)
}
console.log(globalVar)
console.log(globalLet)

const a = 'b'
a = 'a'
console.log(a)

//objetos

let name= 'daniel'
let age = 20

obj = { name: name, age: age}

obj2 = {name, age}
console.log(obj)
console.log(obj2)

const names = [
    {name: 'daniel', age: 20},
    {name: 'oscar', age: 31}
]

let listOfnames = names.map(function(item) {
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

/*const listOfNames3 = { name, age, country } => {
    ...
}

const listOfnames4 = names => {
    ...
}*/

const square = num => num * num

//promesas

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (true){
            resolve('hey!')
        }else {
            reject('ups!!')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))


class calculator {
    constructor (){
        this.valueA = 0
        this.valueB = 0
    }

    sum (valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2,2))


//modulos
import { hello } from './module'

hello()


//generadores

function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)