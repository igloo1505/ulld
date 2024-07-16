export const getRandomChar = () => {
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return s[Math.floor(Math.random() * s.length)]
}
