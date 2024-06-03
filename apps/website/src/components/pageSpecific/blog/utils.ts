import { allMyNotes, allAboutUs, allDemos, allBlogPosts } from "contentlayer/generated"
import { PostTypes } from "./blogPostList/types"

export const wrapMath = (equation: string) => {
    return equation.startsWith("$") ? equation : `$$${equation}$$`
}


export const getAllBlogItems = () => {
    return [...allMyNotes, ...allAboutUs, ...allDemos, ...allBlogPosts].filter((a) => a.blog === true) as PostTypes[]
}
