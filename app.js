// 
function getTotal(numbers) {
    return numbers.reduce(function (acc, item) {
        return acc + item;
    }, 0); // initial value of acc. is equal to 0
}
console.log(getTotal([3, 2, 1])); // Output: 6
