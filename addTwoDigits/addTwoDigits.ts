function addTwoDigits(n: any): number {
    
    let numArr = n.toString().split("");

    const result = numArr.reduce((prev, next) => {
        return parseInt(prev + next);
    });

    return result;
}

console.log(addTwoDigits(29));