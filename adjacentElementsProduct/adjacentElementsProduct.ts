function adjacentElementsProduct(inputArray: number[]): number {

    let max: number = inputArray[0] + inputArray[1];

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 1; j < inputArray.length; j++) {
            if (inputArray[i] + inputArray[j] > max && i !== j) {
                max = inputArray[i] + inputArray[j];
            }
        }
    }

    return max;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));