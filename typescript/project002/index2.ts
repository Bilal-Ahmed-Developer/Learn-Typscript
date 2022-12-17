// // union types explicity
// type p ={name:string,pages:number};
// type a = {name:string,words:number}
// type poem =p|a;
// let c :poem = Math.random()>0.5 ?{name:"mubashir",pages:3} : {name:"okasha",words:500}
// if ("pages"in c) {
//                  c.pages
// }else{
//                  c.words
// }

// Descipmitted union
export{}
type ImranInPakistan ={
                 name:string,
                 age:number,
                 type:"Pakstani"
}
type ImranInOverseas ={
                 name:string,
                 age:number,
                 type:"Overseas",
                 nickName:string
}
type Imran = ImranInPakistan | ImranInOverseas

let imran1 : Imran = Math.random() > 0.5 ?
{name:"Imran", age:30, type:"Pakstani" }:
{name:"Imran", age:30, type:"Overseas", nickName:"Alexender" }
if (imran1.type === "Pakstani") {
                 console.log(`he call him ${imran1.name}`)
} else {
                 console.log(`he call him ${imran1.nickName}`)
                 
}