export const linspace = (a: number, b: number, dataPoints: number) => {
    let dp = Math.abs(a - b) / (dataPoints - 1);
    let shouldSubtract = a - b > 0;
    return Array(dataPoints)
        .fill(dp)
        .map((d, i) => (shouldSubtract ? a - d * i : a + d * i));
};
