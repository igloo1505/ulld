import * as sass from 'sass'


export const compileSassString = async (content: string) => {
    return await sass.compileStringAsync(content, { style: "compressed" })
}


export const wrapCssWithSpecifier = (css: string, id?: string, _class?: string) => {
    if (id) {
        return `#${id} {
${css}
}`
    }
    if (_class) {
        return `.${_class} {
${css}
}`
    }
    return css
}
