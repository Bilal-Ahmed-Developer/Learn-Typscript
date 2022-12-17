// implict type object 
let Bilal:{
                 name:"bilal",
                 age:17,
                 newlearning:true,
                 dob:Date,
                 contact: ()=>{
                                  name:"bilal",
                                  age:17,
                                  newlearning:true,
                                  dob:Date
                 }
}

// and this is explicit type object
type  bilal1= {
   name:string,
   age:number,
   ph:number,
   learningStatus:boolean,
}
let bilal3 :bilal1;
let bilal2 :bilal1;
bilal2={
                 name:"bilal",
                 age:17,
                 ph:08,
                 learningStatus:true
 }
 bilal2.age
bilal3={
                 name:"bilal",
                 age:17,
                 ph:08,
                 learningStatus:true
 }
 export
 type Name ={
   firstName:string,
   lastName:string
 }
 let name:Name ={
   firstName:"bilal",
   lastName:"ahmed"
 }

 type explicit={
     name:string,
     age:number,
     qualification:string
 }
 let Bilal5:explicit={
    name:"bilal",
    age:17,
    qualification:"Metric",
 }
 
//  Nested Object
type system={
  cpu:{
    cache:string,
    speed:string,
  }
  hard:string,
  ram:number,
  diskrom?:boolean
}
// let dell1:system//both cases is fine to define type
let dell1:system={
   cpu:{
    cache:"8mb",
    speed:"2ghz"
   },
   hard:"80gb",
   ram:2,
   diskrom:true
}
// union types implicity type
const book= Math.random() >0.8 ?{name:"bilal",age:17,available:true} :{name:"Talha",age:23,available:false}
console.log(book)

