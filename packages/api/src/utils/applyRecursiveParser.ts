import { UnifiedMdxParserParams, UnifiedMdxParser } from "../types"

export const applyRecursiveMdxParsers = async (data: UnifiedMdxParserParams, parsers: UnifiedMdxParser[]) => {
    let content = data.content
    let fm = data.data
    for await (const parser of parsers) {
        let res = await parser(data) 
        content = res.content
        if(res.data){
            fm = res.data
        }
    }
    return {
        ...data,
        content,
        data: fm
    }
}
