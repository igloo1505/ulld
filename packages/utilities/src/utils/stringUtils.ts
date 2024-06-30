export const capitalize = (val: string) => `${val[0].toUpperCase()}${val.slice(1)}`


export const camelCase = (val: string) => {
    return val.replaceAll(/\-|\_/gm, " ").split(" ").map((l, i) => i === 0 ? l.toLowerCase() : capitalize(l)).join("")
}
