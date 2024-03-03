export const replaceRecursively = (value: string, replace: string | RegExp, replaceWith: string = "") => {
    if(typeof replace === "string"){
       if(value.includes(replace)){
        return replaceRecursively(value.replace(replace, replaceWith), replace, replaceWith)
    }  
    return value
    } 
    if(replace.test(value)){
        return replaceRecursively(value.replace(replace, replaceWith), replace, replaceWith)
    }
    return value
}

export const makeValidId = (id: string) => {
    let s = replaceRecursively(id, " ", "")
    s = replaceRecursively(id, /([^\w]|\d)/gm, "")
    return s
}
