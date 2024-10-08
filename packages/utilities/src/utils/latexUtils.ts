export const stringHasPairedKeys = (s: string, k: string) => {
    if (!s || typeof s !== "string") return false
    let i = s.indexOf(k)
    return i !== -1 && i !== s.lastIndexOf(k)
}

export const stringHasLatex = (s?: string | any) => {
    if (!s || typeof s !== "string") return false
    return stringHasPairedKeys(s, "$")
}

export const stringHasMdx = (s?: string) => {
    if (!s) return false
    if (s.includes("<") && s.includes(">")) return true
    return [
        "_",
        "*",
        "-",
        "$"
    ].some((k) => stringHasPairedKeys(s, k))
}




export const autoWrapMath = (math: string, display: boolean = true) => {
    const s = display ? "$$" : "$"
    let _idx = math.indexOf(s)
    if ((_idx === -1) || (_idx === math.lastIndexOf(s))) {
        return `${s}
${math}
${s}`
    }
    return math
}

