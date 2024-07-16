export const replaceRecursively = (value: string, replace: string | RegExp, replaceWith: string = ""): string => {
    if (typeof replace === "string") {
        if (value.includes(replace)) {
            return replaceRecursively(value.replace(replace, replaceWith), replace, replaceWith)
        }
        return value
    }
    if (replace.test(value)) {
        return replaceRecursively(value.replace(replace, replaceWith), replace, replaceWith)
    }
    return value
}


