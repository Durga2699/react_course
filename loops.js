// let fruits = ["Apple", "Banana", "Mango", "Orange"]
// console.log(fruits[0])

// let raji = [ 1,2,3 ];
// console.log(raji);

//  for (let value of  fruits){
//     console.log(value)
//  }

//  for (let index in fruits){
//     console.log(index)
//  }

//  let object ={
//     name:"durga",
//     age:22,
//     city:"vijayaawada"

//  }

//  for (let key in object ){
//     console.log(key)
//  }

//  for (let key in object){
//     console.log(object[key])
//  }

//  let string="durga"
//   for (let str in string){
//     console.log(str)
//   }
//    let string1 ="durga"
//      for (let str1 in string1){
//         console.log(string1[str1])
//      }

const Fill = new Array(3).fill({x:1})
Fill[0].x = 2
console.log("Fill:",Fill);

const Fill1 = new Array(4).fill().map(()=>({x:1}))
Fill1[0].x = 2
console.log("Fill1:",Fill1)