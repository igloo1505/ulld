export const paginateTemplateString = "<ULLDPAGE>"
export const getPaginationTemplateString = (cb: (pageTemplateString: string) => string) => cb(paginateTemplateString)


export const parsePaginationTemplateString = (templateString: string, pageNumber: number) => templateString.replace(paginateTemplateString, `${pageNumber}`)
