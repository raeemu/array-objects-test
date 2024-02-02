const sumUniqueNumbers = (coll) => {
    const uniqueNumbers = [];
    for (const item of coll) {
        if (!uniqueNumbers.includes(item)) {
            uniqueNumbers.push(item)
        }
    }
    let sum = 0;
    for (const element of uniqueNumbers) {
        sum += element;
    }
    return sum;
}

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6