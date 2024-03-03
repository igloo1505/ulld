export const withForwardSlash = (p: string) => p.startsWith("/") ? p : `/${p}`

export const noTrailingSlash = (p: string) => p.endsWith("/") ? p.slice(0, p.length - 1) : p

export const withTrailingSlash = (p: string) => p.endsWith("/") ? p : `${p}/`


export const makeHref = (s: string) => {
    if (/^http(s?):\/\//gm.test(s)) {
        return s
    }
    let isHttps = window.location.href.startsWith("http") ? window.location.href.startsWith("https") : process.env.NEXT_PUBLIC_PRODUCTION_REMOTE
    return `${isHttps ? "https" : "http"}://${s}`
}


export const noLeadingSlash = (p: string) => p.startsWith("/") ? p.slice(1, p.length) : p

export const setSlashes = ({ value, leading, trailing }: { value: string, leading: boolean, trailing: boolean }) => {
    let v = value
    v = leading ? withForwardSlash(v) : noLeadingSlash(v)
    v = trailing ? withTrailingSlash(v) : noTrailingSlash(v)
    return v
}

export const parentDir = (p: string) => p.indexOf("/") >= 0 ? p.slice(0, p.lastIndexOf("/")) : p

export const getFilenameFromString = (p: string) => p.indexOf("/") === -1 ? p : p.slice(p.lastIndexOf("/") + 1, p.length)

