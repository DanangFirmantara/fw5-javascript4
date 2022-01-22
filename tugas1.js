const readline = require ('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Input a word ", function(word) {
    const input = word
    let x = input.length - 1
    result = ""
    while (x>= 0){
        result += input[x]
        x--
    }
    if (result == input){
        console.log(`${input} is polindrom word`)
    } else {
        console.log (`${input} is not polindrom word`)
    }
    rl.close()
})

