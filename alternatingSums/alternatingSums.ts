function alternatingSums(a: number[]): number[] {
    let teamOne = a[0];
    let teamTwo = 0;

    for (let i = 1; i < a.length; i++) {
        if (i % 2 === 0) {
            teamOne += a[i];
        } else {
            teamTwo += a[i];
        }
    }

    return [teamOne, teamTwo];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))