// console.log("bilal")
let age : number | 'died';
age = "died";
age = 16;
// age = "unknown"

// let your Name 
let myAge : string | number;
myAge = 14;

// console.log(myAge.toLowerCase());

let newAge = Math.random()>0.6 ?"bilal":60
if (newAge ==='bilal') {
    newAge.toUpperCase()
}
if (typeof newAge=='string') {
    newAge.toUpperCase()
}

// let age :
let teacher = {
    name :"zeeshab",
    experience :"10"
}
console.log(teacher.name);
console.log(teacher.experience);

// let student: {
//     name : string;
//     age :Number
// }

// type Student = {
//    name : string,
//    age ?: number
// }
// let student : Student = {
//    name :"bilal",
  
//  age : 17
// }
// let myTp= {name:'zia',id:2};
// // myTp = {id:3}
// var x : {id : number;[s:string]:any}
// x:{id:3;bilal:true}

// interface Ball {
//    diameter:number
// }
// interface Sphere{
//    diameter:number 
// }
// var x :{uuid:number,{x:string}}

// let computernum :number  = Math.floor(Math.random()*10);
// let userNum:number =prompt('')
// if (computernum.value === userNum.value) {
//     console.log('hurry')
// }else{
//     console.log('try again')
// }
// // console.log(num)
interface Metarial{
    name:String
 }
 interface Painter {
    finish():boolean;
    ownMetarials:Metarial[];
    paint(painting:string,metarial:Metarial[]):boolean
 }
 function paintPainting(painter:Painter,painting:string):boolean{
  painter.finish
  return true
 }