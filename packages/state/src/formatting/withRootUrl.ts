import { withForwardSlash } from '@ulld/utilities'


export const getRootUrl = (): string => {
    return typeof window === "undefined" ? process.env.NEXT_AUTH_URL ? process.env.NEXT_AUTH_URL : process.env.PRODUCTION_LOCAL ? "http://localhost:3005" : "http://localhost:3000" : window.location.host
}



export const withRootUrl = (s: string): string => `${getRootUrl()}${withForwardSlash(s)}`
