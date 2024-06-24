const readline = require("readline-sync");

let a = Number(readline.question());
let b = Number(readline.question());
let c = String(readline.question());

let random = Math.random()
let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if(random > 0.1){
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c];
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}