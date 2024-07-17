export const getRandomChar = () => {
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return s[Math.floor(Math.random() * s.length)]
}


export const modifyNameRandomly = (initial: string, haveModified: boolean = false): string => {
   return haveModified
                ? `${initial}${getRandomChar()}`
                : `${initial}_${getRandomChar()}`
}
