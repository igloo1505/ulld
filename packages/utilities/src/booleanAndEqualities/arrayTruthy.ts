export const arrayTruthy = (a: any, trueIfEmpty: boolean = false) => Boolean(Array.isArray(a) && trueIfEmpty ? true : a.length > 0)
