// 







// function getTotal(numbers:Array<number>) {  // this is generic which is seems only in development mode
//     return numbers.reduce((acc,item)=>{
//         return acc + item;
//     },0); // initial value of acc. is equal to 0
// }

// console.log(getTotal([3,2,1])); // Output: 6



// const user ={
//     firstName: 'John',
//     lastName: 'Doe',
//     role:'professor',
// };
// console.log(user.firstName); // Output: "John


// number 
// string
//array[number, string]  array can be number or string
//boolean

//type alias

// type User={
//     name: string;
//     age: number;
//     address?: string;
// }



// const user: User={
//   name: "John",
//   age: 30,
// };


// function login(userData:User):User {
//   return userData;
// }
// console.log(login({name: "John", age:30})); 


// type ID=number | string;

// const userId:ID='123'; 




//Interfaces

// interface Transaction{
//   payerAccountNumber:number;
//   payeeAccountNumber:number;
// }
// interface BankAccount{
//   accountNumber:number;
//   accountHolder:string;
//   balance:number;
//   isActive:boolean;
//   transactions:Transaction[];
// }

// const transaction1: Transaction={
//   payerAccountNumber:123,
//   payeeAccountNumber:455,
// }
// const transaction2: Transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 456,
// };

// const bankAccount:BankAccount={
//   accountNumber:123,
//   accountHolder:"John Doe",
//   balance:1000,
//   isActive:true,
//   transactions:[transaction1, transaction2],
// };  


//Extend
// interface Book{
//   name:string;
//   price:number;
// }
// interface EBook extends Book{
//   // name:string;
//   // price:number;
//   fileSize:number;
//   format:string;
// }

// interface AudioBook extends EBook{   //use of extends to remove duplicacy
//   // name:string;
//   // price:number;
//   // fileSize:number;
//   // format:string;
//   duration:number;
// }
// const book:AudioBook={
//   name: "Harry Potter",
//   price: 15,
//   fileSize: 1000,
//   format: "pdf",
//   duration: 120,
// };


// Merging

// interface Book{
//   name: string;
//   price: number;
// }
// interface Book{
//   size: number;
// }
// const book:Book={
//   name: "Harry Potter",
//   price: 15,
//   size: 10,
// }


// type Book={
//   name: string;
//   price: number;
// }
// type Book={
//   size: number;
// }
// const book:Book={
//   name: "Harry Potter",
//   price: 15,
//   size: 10,
// };

// type SanitizedString=string;
// type EvenNumber=number;

// interface  SanitizedString extends string {

// }  //extends property is not supoort in type aliases




//unions

type ID=number | string;
//Narrowing
// function printId(id:ID){
//   if(typeof id === 'string'){
//   console.log(id.toUpperCase());
//   }
//   else
//   {
//     console.log(id);
//   }
// }

// printId('1'); 

// function getFirstThree(x:string | number[]){
//   return x.slice(0,3);
// }
// console.log(getFirstThree([1,2,3,4,5]));



//Generics

// function logString(arg:string){
//   console.log(arg);
//   return arg;
// }
// function logNumber(arg:number){
//   console.log(arg);
//   return arg;
// }
// function logArray(arg:any[]){
//   console.log(arg);
//   return arg;
// }
// function logAnything<T>(arg:T):T{
//   console.log(arg);
//   return arg;
// }
// logAnything([1,2]);
// logArray([4,3]);

// logString('logged in');


// interface HasAge{
//   age:number;
// }
// function getOldest<T extends HasAge>(people:T[]):T{
//   return people.sort((a,b)=>b.age-a.age)[0];
// }
// const people:HasAge[]=[{age:30},{age:40},{age:10}];
// interface Player{
//   name:string;
//   age:number;
// }
// const players:Player[]=[
//   {name:'John',age:30},
//   {name:'Jane',age:40},
//   {name:'Tom',age:10}
// ];

//  const person= getOldest(players) as Player;

// const person =getOldest(people);
// person.age


interface IPost{
  title:string;
  id:number;
  description:string;
}
interface IUser{
  id:number;
  name:string;  
  age:number;
}

const fetchPostData = async (path:string):Promise<IPost[]> =>{
  const response = await fetch(`http://example.com${path}`);
return response.json();
}
const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};

const fetchData =async<ResultType>(path: string): Promise<ResultType> => {
 const response = await fetch(`http://example.com${path}`);
 return response.json();
};
(async() =>{
//const posts=await fetchPostData('/posts');
const posts=await fetchData<IPost[]>('/posts');
 posts[0].
})();
