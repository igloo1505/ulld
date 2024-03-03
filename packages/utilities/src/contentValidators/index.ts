
export const stringHasPairedKeys = (s: string, k: string) => {
    if (!s || typeof s !== "string") return false
    let i = s.indexOf(k)
    return i !== -1 && i !== s.lastIndexOf(k)
}

export const stringHasLatex = (s?: string | any) => {
    if (!s || typeof s !== "string") return false
    return stringHasPairedKeys(s, "$")
}
