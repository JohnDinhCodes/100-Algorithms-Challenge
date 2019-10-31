function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0;
    inputArray.forEach((num, index) => {
        const next = inputArray[index + 1] || null;
        const previous = inputArray[index - 1] || null;

        if (Math.abs(num - previous) > max) {
            max = Math.abs(num - previous);
        } else if (Math.abs(next - num) > max) {
            max = Math.abs(next - num);
        }
    });

    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));