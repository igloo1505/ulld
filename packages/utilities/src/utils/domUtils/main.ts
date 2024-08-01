export const getHtmlElementAttribute = (attribute: string) => {
    return document.querySelector("html")?.getAttribute(attribute)
}
