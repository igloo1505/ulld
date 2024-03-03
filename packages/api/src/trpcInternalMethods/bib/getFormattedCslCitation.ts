import Cite from 'citation-js'

export const getFormattedCslCitation = (content: string, useUserDefined: boolean = false) => {
    let citations = new Cite(content)
    return { citations, userDefined: useUserDefined }
}
