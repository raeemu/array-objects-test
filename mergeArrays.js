const mergeArrays = (...arrays) => {
    let mergedArray = [];
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j += 1) {
            const element = arrays[i][j];
            if (!mergedArray.includes(element)) {
                mergedArray.push(element);
            }
        }
    }
    return mergedArray;
};

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]