import { headers } from "next/headers"

export const getPathnameFromHeaders = () => {
    const headerList = headers()
    let pathname = headerList.get("x-url")
    let pindex = pathname?.indexOf("?")
    if (pathname && pindex && pindex > -1) {
        pathname = pathname.slice(0, pindex)
    }
    return pathname
}
