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


type ID=number | string;

const userId:ID='123'; 