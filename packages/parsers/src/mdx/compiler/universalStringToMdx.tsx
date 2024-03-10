import axios from 'axios'
import { MathjaxParserParams } from '../../..'


/* TODO: Not implemented yet. */
export const universalStringToMathjax = async (s: string, options?: MathjaxParserParams) => {
    const isServer = Boolean(typeof window === "undefined")
    console.log("isServer: ", isServer)
    return {content: s}
}

