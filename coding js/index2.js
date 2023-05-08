console.log("hi")

//remove duplicates from array
// const array=['A','B','C','A']
// console.log(array)
// const res= array.filter((element,index)=>{

//     if(array.indexOf(element) == index)
    
//        return element;
// })

// console.log(res)
// const arr = new Set(array);
// console.log(arr);

// const redu = array.reduce((prev,curr)=>{
//     console.log(prev,curr)
//     if(!prev.includes(curr))
//     {
//         prev.push(curr)
//     }
//     return prev
// },[])z

//remove duplictes from objects
//??// pending

// //find min and max
// const array = [1,3,2,4,66,3,44,5,0]
// let mini = array[0];
// console.log(mini)
// for( arr of array)
// {
//     // console.log(array)
//     if(array[arr]>=mini)
//     {
//         mini = array[arr]
//     }
    
// }
// console.log("maximum in the array is",mini)

// const res = array.reduce((pre,cur)=>{
//     return pre>cur?pre:cur
// })
// console.log(res)

//find second largest in array
// function largest(...arr){

//     const res = Math.max(...arr)
//     const index = arr.indexOf(res)
//     // console.log(index)
//     arr.splice(index,1)
//     console.log(arr)
//     const res2 = Math.max(...arr)
//     console.log(res2)

// }
// largest(...array)

// const res=array.find((e)=>
// {
//     if(e==1)
//     {
//         return e
//     }
//     else{
//         console.log("not pressent")
//     }
// })
//  console.log(res)

//sort an array
// const res = (arr)=>{
//     console.log(arr)
    
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j =i+1;j<arr.length;j++)
//         {
//             let temp=0;
//             if(arr[i]>arr[j])
//             {
//                 temp = arr[i];
//                 arr[i]=arr[j];
//                 arr[j]= temp;

//             }
            
//         }
//     }
//     console.log(arr)

// }
// res(array)

//finding missing number in an array

// const arr=[1,2,3,4,6,7,9,10]
// // console.log(arr.indexOf(5))
// // const total=arr.forEach((elment,index)=>{console.log(index)})
// const res = (arr)=>{
//     let newarr=[]
//     const max = Math.max(...arr)
//     const min = Math.min(...arr)
//     for(let i=min;i<max;i++)
//     {
//         // console.log(arr.indexOf(i))
//         if(arr.indexOf(i)<0)
//         {
           
//             newarr.push(i)
//         }
//     }
//     return newarr
// }
// console.log(res(arr))


//find odd and even in array
// const arr = [1,2,3,45,8,73,23]
// const res = arr.filter((even)=>{
//     if(even%2===0)
//     {
//         return even
//     }
// })
// console.log(res)

//factorial of a number

// function fact(n)
// {
//     if (n<0)
//     {
//         console.log("negative number")
//     }
//     else if(n>1)
//     {
//         // console.log("you have entered the negative number")
//         return (n * fact(n-1))
//     }
 
//     else{
//               return 1
//     }
// }

// const res = fact(8)
// console.log(res)


//prime numbers


// let num = parseInt(prompt("enter trhe number")) 
// if(num<1){
//     console.log("you have entered the negative number")
// }
// else if(num==1){
//     console.log("1 is neither prime nor composite")
// }
// else{
//     for(let i=2;i<=num/2;i++)
//     {
//         if(num%i==0)
//         {
//             console.log(`${num} is not a prime number`)
//         }
//         else{
//             console.log(`${num} is a prime number`)
//         }
//     }
// }

//reverse of the string
// const str = prompt("enter the string")
// console.log(str)
// // let arr =[]
// let arr="";
// for(let i=str.length-1;i>=0;i--)
// {
//   arr+=str[i]
// }
// console.log(arr)

//palindrome of number
// function palindrome(){
//     let no =121
//     let temp=no;
//     console.log(temp)
//     let r;
//     let rev=0;
//     while(temp!=0)
//     {
//         r=temp%10;
//         rev =(rev*10)+r;
//         temp =temp/10

//     }
//     if(temp==rev)
//     {
//         console.log("palindrome")
//     }
//     else{
//         console.log("not palindrome")
//     }
//     return
// }
// palindrome(131)


//swap two number without third varaible
// const swap =(a,b)=>{
//         b=a+b;
//         a=b-a
//         b=b-a
//    console.log(a,b)
// }

// we can also swap using destructing [a,b]=[b,a]
// swap(10,12)

//Check two arrays are same or not
// const arr =[2,3,5,7,6]
// const arr2 =[3,5,2,6,7]
// //fisrt check the length of two arrays are same or not
// const length =arr.length==arr2.length;
//     const result = arr.every((element)=>{
//         if(arr2.indexOf(element)>-1)
//         {
//            return
//         }
//     })


// console.log(length)
// // console.log(length)

//intersection between two arrays
// const arr1= [1,2,3,4,4,2,5]
// const arr2 =[1,7,8,4,5]

// const res =arr1.filter
// ((ele)=>{
//     if(arr2.includes(ele))
//     return ele
// })
// console.log(new Set(res))

//fibonacci series

// const num = parseInt(prompt("enter the number"))
// let a =0;
// let b =1;

// if(num==1 || num>1){
//     console.log("0")

//     console.log("1")
// }
   


//     let temp;
//     for(let i=0;i<num;i++)
//     {
//             temp =a+b;
//             console.log(temp)
//             a=b;
//             b =temp
//     }

//star patterns

// for(let i =0;i<6;i++)
// {
//     for(let j=0;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

//second pattern
// for(let i=1;i<8;i++)
// {
    
//     for(let j=8;j>1;j--)
//     {
//         if(j>i)
//         {
//             document.write(" &nbsp")
//         }
//         else{
//             document.write("*"+"&nbsp")
//         }
        
//     }
    
//     document.write("<br>")
// }

//third right traingle pattern in number

// for(let i=1;i<6;i++)
// {
//     for(let j=1;j<i;j++)
//     {
//         document.write(j+ "&nbsp")
//     }
//     document.write("<br>")
// }

//fourth pattern reverse pyramid

// for(let i=1;i<6;i++)
// {
//     for(let j=1;j<i;j++)
//     {
//         document.write("&nbsp")
//     }
//     for(let k =6;k>i;k--)
//     {
//         document.write("*" + "&nbsp")
//     }

//     document.write("<br>")
// }
   
// fifth pyramid 

// for(let i=1;i<7;i++)
// {
//     for(j=8;j>i;j--)
//     {
//         document.write("&nbsp")
//     }
//     for(let j=1;j<=i;j++)
//     {
//         document.write("*"+"&nbsp")
//     }

//     document.write("<br>")

// }

//k pattern

// for(let i=1;i<6;i++)
// {
//     for(let j=6;j>i;j--)
//     {
//         document.write("*")
//     }

//     document.write("<br>")

// }

// for(let i=1;i<6;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         document.write("*")
//     }

//     document.write("<br>")

// }

//sandglass pattern this is the combination of two pattern
// for(let i =1;i<6;i++)
// {
//     for(let j=1;j<i;j++)
//     {
//         document.write("&nbsp")
//     }
//     for(let k =6;k>i;k--)
//     {
//         document.write("*")
//     }

//     document.write("<br>")
// }
// for(let i=1;i<6;i++)
// {
//     for(let j=5;j>i;j--)
//     {
//         document.write("&nbsp")
//     }

//     for(let k=1;k<=i;k++)
//     {
//         document.write("*")

//     }

//     document.write("<br>")
// }

//check occurence of chracter
// function check()
// {
//     const arr ="hello world"
//     console.log(arr.length)
//     let cha ="l"
//     let count =0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(cha==arr[i])
//         {
//             count++
//         }
//     }
//     console.log(`${cha} occur: ${count} times`)

    
// }
// check()

//print table
// function table()
// {
//     let n =2;
//     for(i=1;i<=10;i++)
//     {
//         console.log(`${n} * ${i} = ${n*i}`)
//     }
// }

// table()

//armstrong number

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');

// let temp = number;
// while (temp > 0) {
    
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;

//     temp = parseInt(temp / 10); // convert float into integer
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }

//remove null from object

// const obj ={
//     a:2,
//     b:null,
//     c:undefined,
//     k:"kaisar"
// }
// let arr =Object.entries(obj);
// console.log(arr)
// let res=arr.filter(([str,value])=>{
//     return value!=null
// })
// let final= Object.fromEntries(res)
// console.log(final)
