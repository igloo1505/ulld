import {getPages as myNotesPages} from "sources/myNotes"
import {getPages as blogPages} from "sources/blog"
import { PageType } from "#/types/general"

export const wrapMath = (equation: string) => {
    return equation.startsWith("$") ? equation : `$$${equation}$$`
}


export const blogLayoutMobileBreakpoint = 840;
