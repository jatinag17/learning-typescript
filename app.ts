// 







function getTotal(numbers:Array<number>) {  // this is generic which is seems only in development mode
    return numbers.reduce((acc,item)=>{
        return acc + item;
    },0); // initial value of acc. is equal to 0
}

console.log(getTotal([3,2,1])); // Output: 6

