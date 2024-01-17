// *
// **
// ***
// ****
// *****

let char = "*"
let box = 20
let str = ""

for(let i=1;i<=box;i++){
    for(let j=1;j<=i;j++){
        str+=char
    }
    str+="\n"
}

console.log(str)

console.log()
console.log()
console.log()




// *****
// ****
// ***
// **
// *

str = ""

for(let i=box;i>=1;i--){
    for(let j=i;j>=1;j--){
        str+=char
    }
    str+="\n"
}
console.log(str)

console.log()
console.log()
console.log()



//      *
//     **
//    ***
//   ****
//  *****


str = ""

for(let i=1;i<=box;i++){
    for(let j=0;j<box;j++){
        if(box-j > i){
            str+=" "
        }
        else{
            str+=char
        }
    }
    str+="\n"
}
console.log(str)

console.log()
console.log()
console.log()



// *****
//  ****
//   ***
//    **
//     *

str = ""
for(let i=0;i<box;i++){
    for(let j=box;j>0;j--){
         if(box-i >= j){
            str+="*"
         }
         else{
            str+=" "
         }
    }
    str+="\n"
}
console.log(str)