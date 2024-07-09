import { LetterType, SearchAllParams } from "../types/general";

export const getFirstLetterWithLatex = (value: string): LetterType => {
    return value.replaceAll(/\\|\:|\-|\=|\_/gm, "")[0] as LetterType
}



export const searchAllParamsToSearchParamsClass = (sp: SearchAllParams): URLSearchParams => {
   let data = new URLSearchParams()
    if(sp.query){
        data.set("query", sp.query)
    }
    if(sp.page || typeof sp.page === "number"){
        data.set("page", sp.page)
    }
    if(sp.tags){
        for (const t of sp.tags) {
            data.append("tag", t)
        }
    }
    if(sp.take){
        data.set("take", sp.take)
    }
    if(sp.remote){
        data.set("remote", "true")
    }
    if(sp.topics){
        for (const t of sp.topics) {
            data.append("topic", t)
        }
    }
    if(sp.subjects){
        for (const t of sp.subjects) {
            data.append("subjects", t)
        }
    }
    if(sp.perPage){
        data.set("perPage", sp.perPage)
    }
    if(sp.tagRegex){
        for (const t of sp.tagRegex) {
           data.append("tagRegex", t.source) 
        }
    }
    if(sp.citations){
        for (const c of sp.citations) {
            data.append("citations", c)
        }
    }
    if(sp.categories){
        for (const t of sp.categories) {
            data.append("categories", t)
        }
    }
    if(sp.sequentialId){
        data.set("sequentialId", sp.sequentialId)
    }
    if(sp.equationId){
        data.set("equationId", sp.equationId)
    }
    return data
}

