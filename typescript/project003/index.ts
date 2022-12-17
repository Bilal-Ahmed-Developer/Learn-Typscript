// required function parameter
// function hello(parma:string|number) {
//                  console.log(`hello ${parma}`)
// }
// hello("bilal")

// optional function parameter
// function hello1(parma?:string|number) {
//                  console.log(`hello ${parma}`)
// }
// hello1()

// Default function paramter 
// function hello2(params:string="billal") {
//                  console.log(`hi ${params}`)
// }
// hello2()

// Rest parameter function
// function fullName(firstName:string,...lastName:string[]) {
//                  console.log(`${firstName} ${lastName.join()}`)
// }
// fullName("bilal","Ahmed","developer")

// return function type implicit
// function names(p:string="bilal") {
//                  return p
// }
// names()

// // return function type 
// function names1(p:string="bilal"):string {
//                  return p
// }
// names()

// function types
// let ImranName: (name:string, nickname?:string) => string

// let nickName = ["bilal", "billy", "billu"]
// function allName(callback: (index: number) => string) {
//                  for (let i = 0; i < nickName.length; i++) {
//                                   console.log(callback(i));
//                  }
// }
// function getNameat(index: number) {
//                  return `${nickName[index]}`
// }
// // allName(getNameat)
// function logNames(name:string){
//      return `${name}`
// }
// allName(logNames)




