const input = require("readline-sync")
let a = input.questionInt("enter the any number: ")
let b = input.questionInt("enter the any number: ")
let m=a;
let n=b;
while(b!==0){
    r=b
    b=a%b
    a=r;

}
lcm=(m*n)/a
console.log("hcf =",a)
console.log("lcm =",lcm)

