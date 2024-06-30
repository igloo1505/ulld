export const sum = (values: number[]): number => {
    return values.reduce((a, b) => a + b)
}

export const numberBool = <T extends unknown>(n: T): boolean => typeof n === "number"

export const numberOrDefault = <T extends unknown>(n: T, defaultNumber: number): number => numberBool<T>(n) ? n as number : defaultNumber


