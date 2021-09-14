const obj = {
    name: 'daniel',
    age: 20,
    country: 'Colombia'
}

//let {name, ...all} = obj   //tomo los atributos del objeto añadiendolos por su nombre y en 'all' queda encapsulado todo lo demas
//console.log(name, all)
let {country, ...all} = obj
console.log(all)

const obj = {
    name: 'daniel',
    age: 20
}

const obj1 = {
    ...obj,
    country:'colombia'
}
console.log(obj1)

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello world'), 3000)
            : reject(new Error('fallo el test'))
    })
}
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo'))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2020-05-02')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)