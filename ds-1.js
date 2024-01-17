// let data = "name:niraj,age:24,phone:826|name:anai,age:25,phone:970"
// let finalArr = []
// data.split("|").map((val) => {
//     let obj = {}
//     val.split(",").map((val,key )=> {
//         let valArr = val.split(":")
//         obj[valArr[0]] = valArr[1]
//     })
//     finalArr.push(obj)
// })

// console.log(finalArr)


// let arr = [0,-1,2,-3,1]
// let target = -2
// function indexFinder(arr,target){
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j = i+1;j<=arr.length-1;j++){
//             if(arr[i] + arr[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// }
// let index = indexFinder(arr,target)
// console.log(index)



// *
// **
// ***
// ****
// *****

// let char = "*"
// let num = 5

// for(let i=0;i<num;i++){
//     let val = ""
//     for(let j=0;j<=i;j++){
//         val+=char
//     }
//     console.log(val)
// }


//      *
//     **
//    ***
//   ****
//  *****

// let char = "*"
// let num = 5

// for(let i=0;i<num;i++){
//     let val = ""
//     for(let j=0;j<=num;j++){
//         if(num-i<=j)val+="*"
//         val+=" "
//     }
//     console.log(val)
// }


// for(let i=num;i>=1;i--){
//     let val = ""
//     for(let j=0;j<num;j++){
//         val+=" "
//     }
//     for(let k=0;k<i;k++){
//         val+="*"
//     }
//     console.log(val)
// }


// let price = [7,1,5,3,6,4]

// let highest = Math.max(...price)
// let lowest = Math.min(...price)

// let best = highest-lowest

// console.log(best)



// let arr = [1,2,3,4,3]
// let verdict = []
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         let count = 0
//         if(arr[i]===arr[j]){
//             count++
//         }
//         if(count>0){
//             verdict.push(arr[i])
//         }
//     }
// }
// console.log(verdict)


// let arr = [10, 3, 5, 6, 2]
// let res = []
// for (let i = 0; i < arr.length; i++) {
//     let mul = 1
//     let copy = JSON.parse(JSON.stringify(arr))
//     copy.splice(copy.indexOf(arr[i]), 1)
//     for (let j = 0; j < copy.length; j++) {
//         mul *= copy[j]
//     }
//     res.push(mul)
// }
// console.log(res)


// let str = ""
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)



// let str = ""
// for(let i=1;i<=5;i++){
//     for(let j=i;j<=5;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

// let str = ""

// for(let i=1;i<=5;i++){
//     for(let j=0;j<5;j++){
//         if(5-j > i){
//             str+=" "
//         }
//         else{
//             str+="*"
//         }
//     }
//     str+="\n"
// }

// console.log(str)



