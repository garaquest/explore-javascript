let num = [1,2,3,4,5]
let numbers = [1,2,3,4,5]

console.log(num == numbers)

// An array, which is a non-primitive data type is mutable. Non-primitive data type cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

num = numbers
console.log(num == numbers)



const PI = Math.PI
console.log(PI)

console.log(Math.round(PI))
console.log(Math.ceil(PI))
console.log(Math.floor(PI))

let randomnum = Math.random()
console.log(randomnum)

let firstname = "Satoshi"
let space = " "
let lastname = "Nakamoto"
console.log(firstname + space + lastname)

let lang = 'Javascript'
console.log(lang.length)
console.log(lang[0])
console.log(lang[1])
console.log(lang[2])
console.log(lang[3])
console.log(lang[4])
console.log(lang[5])
console.log(lang[6])
console.log(lang[7])
console.log(lang[8])
console.log(lang[9])

let country = 'indonesia'
console.log(country.toUpperCase())

console.log(lang.substr(4,6))

console.log(lang.substring(0,3))

console.log(lang.split(""))
