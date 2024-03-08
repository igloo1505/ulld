import dayjs from "dayjs"

const disallowIdChars = "!@#$%^&*()[]{}\\|'\";,><`="


export const stringToConsistentId = (s: string, prefix?: string) => {
    const allowCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let r = ""
    let _s = s.trim().toLowerCase().split("")
    for (const k of _s) {
        if (k === " ") {
            r = r += "_"
        } else if (allowCharacters.includes(k)) {
            r = r += k
        }
    }
    return prefix ? `${prefix}-${r}` : r
}


export const dateOrDefault = <T extends unknown>(d: string | Date | number | null | undefined, defaultReturn: T): Date | T => {
    return Boolean(d && dayjs(d as string)?.isValid()) ? new Date(d as string) : defaultReturn
}


export const convertGithubUrlToRawContentUrl = (s: string): string => {
    return s.replace('github.com', "raw.githubusercontent.com").replaceAll("/blob", "")
}
