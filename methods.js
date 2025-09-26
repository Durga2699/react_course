let array =["durga" ,"raji","anu" ,"yamuna"]
  console.log(array)
 array[1]="venu"
  console.log(array)
 array.push("v")
  console.log(array)

 array.pop("v")
  console.log(array)
 array.shift("durga")
  console.log(array)
 array.unshift("durga")
    console.log(array)
   
let hd= "hello durga"
let sample=hd.split("")
console.log(sample)

let companyes='google, amezon,facebook,apple'
let ApplySlice=companyes.slice(',')
console.log(companyes)

let  fruitsNames=["bananna","Apple","grapes","orange"]
console.log(fruitsNames.join())
console.log(fruitsNames.toString())
console.log(fruitsNames.join(""))
console.log(fruitsNames.join("   dur  "))
console.log(fruitsNames.reverse())



const fruits = [
 'banana',
 'orange',
 'mango',
 'papaya',
 'apple',
 'banana'


]
 fruits[2]='apple'
 console.log(fruits)
let lastIndex=fruits.length-1
console.log(lastIndex)
fruits[lastIndex]='durga'
console.log(fruits)

const  durga = Array(8).fill("durga")
console.log("array filled with the data durga",durga)



const index= fruits.indexOf('papaya')
console.log(index)
const lastIndexFruits=fruits.lastIndexOf('banana')
console.log("last index of the banana:",lastIndexFruits)
console.log("Initial Fruits:",fruits)
const remove=fruits.splice(1,2)   //  first index is the  index position  and  sectond index is the how many posttion to remove 
console.log("remove second and third",remove)
console.log(fruits)









 
