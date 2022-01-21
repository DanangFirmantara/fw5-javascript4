// const { parse } = require("path/posix")

const num = 2129

//if input not string
let str = num.toString()
console.log(str)

//convert string to number
let int = parseInt(str)
console.log(int)

//push string to array
const digit = str.split('')
console.log(digit)

//convert each element of array  to integer and return array of object which is array object of number
res = digit.map((Element) =>{
    intArr = parseInt(Element)
    return intArr
})

//this function is for to convert array of string to array of number then sort it
console.log (res.sort((a,b) =>{
    return a-b
}))

//how to sort array in element
let value = [2,4,1,3,5,1,324,100]
temp = value.sort((a,b) =>{
    return a-b
})

result = temp.toString
console.log(temp)