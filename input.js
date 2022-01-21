const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', function (name) {
  input = name.split(', ')
  input.map((item) =>{
      return console.log(item)
  })
  rl.close()    
});

rl.on('close', function() {
    console.log(`Good bye !!`)
    process.exit(0)
})

