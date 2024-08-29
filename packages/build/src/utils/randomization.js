export const getRandomChar = () => {
    let s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return s[Math.floor(Math.random() * s.length)];
};
export const modifyNameRandomly = (initial, haveModified = false) => {
    return haveModified
        ? `${initial}${getRandomChar()}`
        : `${initial}_${getRandomChar()}`;
};
