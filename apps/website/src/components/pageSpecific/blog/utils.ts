import { allMyNotes, allAboutUs, allBlogPosts } from "contentlayer/generated"
import { PostTypes } from "./blogPostList/types"

export const wrapMath = (equation: string) => {
    return equation.startsWith("$") ? equation : `$$${equation}$$`
}


export const getAllBlogItems = () => {
    return [...allMyNotes, ...allAboutUs, ...allBlogPosts].filter((a) => a.blog === true) as PostTypes[]
}


export const blogLayoutMobileBreakpoint = 840;
