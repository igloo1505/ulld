
export const getRandomId = (_length: number = 16) => {
    const idChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let s = `${idChars.charAt(Math.floor(Math.random() * 52))}`
    for (var i = 0; i < _length; i++) {
        s += idChars.charAt(Math.floor(Math.random() * idChars.length))
    }
    return s
}
