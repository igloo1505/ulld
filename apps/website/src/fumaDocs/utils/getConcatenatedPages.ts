import { PageType } from "#/types/general";
import { getPages as blogPages } from "../sources/blog";
import { getPages as brandPages } from "../sources/brand";
import { getPages as demosPages } from "../sources/demos";
import { getPages as legalPages } from "../sources/legal";
import { getPages as mainPages } from "../sources/main";
import { getPages as myNotesPages } from "../sources/myNotes";


export const getAllMdx = () => {
    return [
        ...blogPages(),
        ...brandPages(),
        ...demosPages(),
        ...legalPages(),
        ...mainPages(),
        ...myNotesPages(),
    ] as PageType[]
};


export const getAllBlogPages = (): PageType[] => {
    let data = blogPages()
    let other = myNotesPages()
    for (const k of other) {
       if("blog" in k && k.blog){
            data.push(k)
        } 
    }
    return data as PageType[]
}
