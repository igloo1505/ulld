
export const randomFromArr = <T extends unknown>(arr: T[] | string): T => {
    return arr[Math.floor(Math.random() * arr.length)]
}



export const forN = <T extends unknown>(n: number, cb: (idx: number) => T): T[] =>
    Array(n)
        .fill(0)
        .map((_, i) => cb(i));
