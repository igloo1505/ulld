import { withForwardSlash } from "./fsUtils"



export const includesRoot = (p: string, fsRoot: string) => {
    return p.includes(fsRoot)
}


export const makeAbsolute = (p: string, fsRoot: string) => {
    return p.includes(fsRoot) ? p : `${fsRoot}${withForwardSlash(p)}`
}

