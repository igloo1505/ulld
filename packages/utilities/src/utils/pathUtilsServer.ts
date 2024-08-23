import path from 'path'

export const makeAbsolute = (p: string, fsRoot: string) => {
    return p.includes(fsRoot) ? p : path.join(fsRoot, p)
}
