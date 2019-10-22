function addTwoDigits(n: any): number {
    
    let numArr = n.toString().split("");

    return parseInt(numArr[0]) + parseInt(numArr[1]);
}

console.log(addTwoDigits(29));