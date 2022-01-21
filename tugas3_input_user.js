const readline = require('readline')
const rl =readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Input number ", function(num) {
    const input = num
    let temp = input.length -1
    let x=0
    let found = ""
    let res = ""
    while (x<=temp){
        if (input[x] == "0"){
            found = sort(found)
            res += found
            found = ""
        } else {
            found += input[x]
        }
        if (x == temp){
            found =sort(found)
            res += found
        }
        x++
    }
    
    console.log(parseInt(res))
    rl.close()
})

function sort(found){
    // sorting
    // push string to array
    str = found.split('')

    // convert array of string to array of number
    intArr = str.map((Element) =>{
        intArr = parseInt(Element)
        return intArr
    })

    // sorting array of number
    res = intArr.sort((a,b) =>{
        return a-b
    })

    res = res.map ((Element) =>{
        intStr =Element.toString()
        return intStr
    })

    //convert array of number to string
    found = res.join("")

    return found
}