function allLongestStrings(inputArray: string[]): string[] {

    let max = 0;
    let result = [];

    for (let string of inputArray) {
        if (string.length > max) {
            max = string.length;
        }
    }

    for (let string of inputArray) {
        if (string.length === max) {
            result.push(string);
        }
    }

    return result;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));