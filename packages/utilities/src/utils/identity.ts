const idChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
import { replaceRecursively } from "./general"


export const getRandomId = (_length: number = 16) => {
    let s = `${idChars.charAt(Math.floor(Math.random() * 52))}`
    for (var i = 0; i < _length; i++) {
        s += idChars.charAt(Math.floor(Math.random() * idChars.length))
    }
    return s
}



export const makeValidId = (id: string) => {
    let s = replaceRecursively(id, " ", "")
    s = replaceRecursively(id, /([^\w]|\d)/gm, "")
    return s
}
