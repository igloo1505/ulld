import { withForwardSlash, setSlashes } from "@ulld/utilities"

export const ensureRootRelative = (p: string, fsRoot: string) => withForwardSlash(p.indexOf(fsRoot) === -1 ? p : p.split(fsRoot)[1])

export const ensureAbsolute = (p: string, fsRoot: string) => {
    return p.includes(fsRoot) ? p : `${fsRoot}${setSlashes({ value: p, leading: true, trailing: false })}`
}
