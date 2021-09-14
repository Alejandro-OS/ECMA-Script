let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(2))

let array2 = [1,2,3,4,5]

console.log(array2.flatMap(value => [value, value * 2]))

let hello = '    hell o w o rld     '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())
console.log(hello.trim())

try {

}catch {
    Error
}

let entries = [["name", "oscar"], ["age", 32]]
console.log(Object.fromEntries(entries))

let mySymbol = 'my Symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)