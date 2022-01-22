
// //input from user
// const readline = require('readline')
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })

// rl.question("input a sentence ", function(sentence) {
//     const input = sentence
//     temp = input.length - 1
//     let x = 0
//     let found = ""
//     let res = ""
//     while (x <= temp){
//         if (input[x] == ' '){
//             res = found + ' ' + res
//             found = ''
//         } else {
//             found += input[x]
//         }
//         if (x == temp){
//             res = found + ' ' + res
//         }
//         x++
//     }
//     console.log(res)
//     rl.close()
// })


//input has initialization
function reseredWord(data) {
    const input = data
    temp = input.length - 1
    let x = 0
    let found = ""
    let res = ""
    while (x <= temp){
        if (input[x] == ' '){
            res = found + ' ' + res
            found = ''
        } else {
            found += input[x]
        }
        if (x == temp){
            res = found + ' ' + res
        }
        x++
    }
    console.log(res)
}

reseredWord("Aku Bukan Boneka")