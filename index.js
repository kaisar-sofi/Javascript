console.log("hello")

// let sum= function(a)
// {
//         console.log(a)
//         let b=3;
//         let c = function()
//         {
//                 return a+b;
//                 console.log("hi")
//         }
//         return c;
// }

// const res=sum(3);
// console.log(res())

// let sum = function(a,b,c){

//     console.log(a,b,c)
//     return{
//         getsum:  function()
//         {
//              return a+b;
//         },
//           getsumthree: function()
//              {
//                  return a+b+c;
//              }
//         }

    
// }
//  const res=sum(2,3,4);
// //  console.log(res())
//  console.log(res.getsumthree())

// let mypromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("pending")
//         resolve(54);
//     },2000)
// }).then((value)=>{
//     console.log(value)
// })


//object-prototypee

// const obj1 ={
//     name:"kaisar",
//     getname:function()
//     {
//         console.log(this.name)
//     },
   
//}

// const obj2 ={
//     roll:2,
//     // name:"kaisar2",
//     __proto__:obj1
// }
// // console.log(obj2)

// // console.log(obj2.getname());

// const obj3 ={
//     class:"Obj3",
//     // name:"kaisar3",

//     // getname:function()
//     // {
//     //         console.log(this.name);
//     // },
//     __proto__:obj2
// }

// console.log(obj3.getname())

// const array =["kaisar"]
// console.log(array)

// convert array into object with spread,object.assign and prototype

// const arr=["a","b","c"]

// let obj = {...arr}
// console.log(obj)

// let obj2 = Object.assign({},arr)

// console.log(obj2)

// Array.prototype.convertobj = function()
// {
//     let obj ={}

//     this.forEach((element)=>{
//         obj[element] = element
//     })
//     return obj;
// }

// console.log(arr.convertobj())

// let arr = [1,3,4]

// // const obj = Object.fromEntries(arr)
// // console.log(obj)
// arr.map((element)=>{

//     console.log(element*2)

// })

// let obj ={
//    value: ["name","kaisar"],
//    value2:   ["age",14]
// }

// const res= Object.values(obj)
// let data = Object.fromEntries(res)
// console.log(data)

// const myMap = new Map([["apple",500],["oranage",600]])



// myMap.set("tomato",60)
// // console.log(myMap)

// // let entry = myMap.entries()
// let text =""
// for(let x of myMap.entries())
// {
//     // console.log(myMap)
//     text +=x + "\n";

// }
// console.log(text)


// rest and spread

// function sum(a,b,...rest)

// {
      // console.log(rest)
//     let sum =a+b;
//     for(i=0;i<rest.length;i++)
//     {
//         sum +=rest[i];
//     }
//     return sum;
// }

// let res= sum(2,3,4,4,5)
// console.log(res)

// let obj ={
//     name:"kaisar0",
//     age:2,
    // des:["kai","kais"]
// }
// console.log(obj.des)

// for(let key in obj)
// {
//     console.log(key,obj[key])
// }

// spread
// let arr = [1,2,3,4]
// console.log(arr);
// console.log("spread")
// let arr2 = [...arr];
// console.log(arr2)

// arr2.push("kaisar");
// console.log("after push")
// console.log(arr2);

// currying

// function sum(a){
//     return function(b)
//     {
//         return function(c)
//         {
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(2)(3)(5))

//infinte currying

// function sum(a)
// {
//     return function(b)
//     {
//         if(b) return sum(a+b)
//         return a
//     }
       
// }
//  console.log(sum(2)(4)(6)())


//findng duplicate in array

// let arr = ['A','B','A','D','B']

// console.log(arr)

//we can remove the duplicates using Set as set contains unique elements
 
// let array2 = new Set(arr);
// console.log(array2)

// let res =arr.filter((element,index)=>
// {
//     // console.log(element,index)
//     // console.log(arr.indexOf(element))
//    if(arr.indexOf(element)== index)
//    return element 
// })

// console.log(res)


//memoization

//this will loop until i<=n which is time consuming
// let sum =0;
//  const calc=(n)=>{
//     for(let i=0;i<=n;i++)
//     {
//         sum+=i;
//     }
//     return sum
//  }
//  console.log(calc(5))

 //using memoization

//  const memioze =(fun)=>{

//     let cache ={};

//     return function(...args)
//     {
//         let n = args[0];
//         if(n in cache)
//         {
//             console.log("result from cache");
//             return cache[n]
//         }

//         else{
//             console.log("calculation first time")
//             let res = fun(n);
//             cache[n]= res;
//             return res;
//         }
//     }

//  }
//  console.time()
//  let result = memioze(calc);
//  console.log(result(6))
//  console.timeEnd()

//  console.time()
//  console.log(result(6))
//  console.timeEnd()


//debouncing

const func=(value)=>{
    console.log(value)
}
const mydebounce  = (func,timeout)=>{

    let time;
    return function(...args){
        // console.log(args);
        clearTimeout(time);
        // const [value] =args
       time= setTimeout(()=>{
        // func(value)
        func.apply(this,args);
       },timeout)

       

    }

}

const debounce = mydebounce(func,1000)

const input = document.getElementById("input")
input.addEventListener("change",(event)=>
{
    debounce(event.target.value)
})
