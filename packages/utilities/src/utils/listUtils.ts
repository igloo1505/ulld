
export const randomFromArr = <T extends unknown>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)] as T
}



export const forN = <T extends unknown>(n: number, cb: (idx: number) => T): T[] =>
    Array(n)
        .fill(0)
        .map((_, i) => cb(i));


export const removeArrayOverlap = <T extends unknown>(data: T[]) => {
    let newData: T[] = []
    for (const k of data) {
       if(!newData.includes(k)){
            newData.push(k)
        } 
    }
    return newData
}
