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


