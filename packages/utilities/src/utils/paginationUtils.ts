export const paginateTemplateString = "<ULLDPAGE>"
export const getPaginationTemplateString = (cb: (pageTemplateString: string) => string) => cb(paginateTemplateString)


export const parsePaginationTemplateString = (templateString: string, pageNumber: number) => {
    return templateString.replace(encodeURI(paginateTemplateString), `${pageNumber}`).replace(paginateTemplateString, `${pageNumber}`)
} 
