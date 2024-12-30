// 
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
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree([1, 2, 3, 4, 5]));
